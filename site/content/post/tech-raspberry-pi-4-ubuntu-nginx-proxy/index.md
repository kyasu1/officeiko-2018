---
title: ラズパイ上のUbuntuでnginx-proxyを走らせて複数のウェブアプリをホストする
date: 2019-12-25T17:14:25+09:00
draft: false
author: Yasu
category: tech
tags:
- Raspberry Pi
- Ubuntu
- Docker
- nginx
resources:
- src: nginx_logo.png
  title: 
- src: wordpress_init.png
  title: WordPressのインストール画面
---
{{< blog-img "nginx_logo.png" >}}

Dockerおよびdocker-composeで構成されたコンテナ上で実行される、複数のウェブアプリ等を一台のPC上で実行したい。例えばこんなイメージ:

```bash
http://blog.pi4.local/ => /home/ubuntu/blog/docker-compose.yml
http://app1.pi4.local/ => /home/ubuntu/app1/docker-compose.yml
http://app2.pi4.local/ => /home/ubuntu/app2/docker-compose.yml
```

nginxをリバースプロキシとして使うと実現できるのですが調べてみると設定が難しそう…

手軽な方法を探していたところ、[こちら](https://blog.ssdnodes.com/blog/host-multiple-websites-docker-nginx/)の記事およびその元となった[`nginx-proxy`](https://github.com/jwilder/nginx-proxy)というリポジトリがありました。詳しい仕組みは[解説](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/)に書いてあります。かんたんに説明すると、`nginx-proxy`自身がDockerコンテナで構成されていて、環境変数に`VIRTUAL_HOST=`を持つDockerコンテナを、同じDockerコンテナネットワーク上に見つけると、自動的にnginxのリバースプロキシの設定を作成し、要求されたサブドメインへのアクセスを適当なコンテナへ誘導してくれます。ローカル環境を汚さずに立ち上げることができるので、もう全てがDockerで支配されて良いんじゃないか〜という感じです。

実際に試したところ上手く行ったので記録しておきます。

## `nginx-proxy`コンテナのセットアップ

今回もRaspberry Pi 4上で64bit版のarm64向けUbuntu 18.04.3を使っています。最新のDockerおよびdocker-composeがインストール済みです。詳細は以前の[記事](/post/tech-raspberry-pi-4-ubuntu-docker/)を参照してください。

### `Docker`ネットワークの作成

`nginx-proxy`がコンテナの追加を監視するDockerコンテナ・ネットワークを作成します。

```bash
$ docker network create nginx-proxy
```

### arm64に対応したDockerfileの準備

`nginx-proxy`のリポジトリではarm64用の`Dockerfile`が提供されていないため、既存のx86用の`Dockerfile`を基にしました。適当なディレクトリ、ここでは`/home/ubuntu/nginx-proxy/`に以下の`Dockerfile`を作成します。

{{< highlight docker "hl_lines=20-23" >}}
FROM arm64v8/nginx

LABEL maintainer="Jason Wilder mail@jasonwilder.com, Ondřej Záruba <info@zaruba-ondrej.cz> (https://zaruba-ondrej.cz)"

# Install wget and install/updates certificates
RUN apt-get update \
 && apt-get install -y -q --no-install-recommends \
    ca-certificates \
    wget \
    git \
 && apt-get clean \
 && rm -r /var/lib/apt/lists/*


# Configure Nginx and apply fix for very long server names
RUN echo "daemon off;" >> /etc/nginx/nginx.conf \
 && sed -i 's/^http {/&\n    server_names_hash_bucket_size 128;/g' /etc/nginx/nginx.conf


# Install Forego 変更点
RUN wget --quiet https://bin.equinox.io/c/ekMN3bCZFUn/forego-stable-linux-arm64.tgz && \
	tar xvf forego-stable-linux-arm64.tgz -C /usr/local/bin && \
	chmod u+x /usr/local/bin/forego

ENV DOCKER_GEN_VERSION 0.7.4

RUN wget --quiet https://github.com/jwilder/docker-gen/releases/download/$DOCKER_GEN_VERSION/docker-gen-alpine-linux-armhf-$DO
CKER_GEN_VERSION.tar.gz \
 && tar -C /usr/local/bin -xvzf docker-gen-alpine-linux-armhf-$DOCKER_GEN_VERSION.tar.gz \
 && rm /docker-gen-alpine-linux-armhf-$DOCKER_GEN_VERSION.tar.gz


ENV NGINX_PROXY_VERSION "0.6.0"
RUN git clone --branch ${NGINX_PROXY_VERSION} https://github.com/jwilder/nginx-proxy.git /app

WORKDIR /app/

ENV DOCKER_HOST unix:///tmp/docker.sock

VOLUME ["/etc/nginx/certs", "/etc/nginx/dhparam"]

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["forego", "start", "-r"]
{{< / highlight >}}

変更点は、Foregoのarm64版を[公式サイト](https://dl.equinox.io/ddollar/forego/stable)からダウンロードして展開するようになっています。

### docker-compose.ymlの準備

同じディレクトリに`docker-compose.yml`を作成します。ここでは先のDockerファイルをビルドすることにより`nginx-proxy`を立ち上げる設定に変更しています。

{{< highlight yaml "hl_lines=4" >}}
version: "3"
services:
  nginx-proxy:
    build: .
    container_name: nginx-proxy
    restart: always
    ports:
      - "80:80"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro

networks:
  default:
    external:
      name: nginx-proxy
{{< / highlight >}}

準備ができたら

```bash
$ docker-compose up -d
```

としてコンテナを起動し、以下のようになっていればOKです。

```bash
$ docker ps
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                NAMES
1e102858616b        nginx-proxy_nginx-proxy   "/app/docker-entrypo…"   7 hours ago         Up 10 minutes       0.0.0.0:80->80/tcp   nginx-proxy
```

## ウェブアプリケーション側の設定

Dockerの公式の[クイックスタートガイド](http://docs.docker.jp/compose/wordpress.html)に、WordPressを立ち上げる`docker-compose.yml`があります。これに少し変更を加えて立ち上げる例を用意してみました。ここでは適当なディレクトリ`/home/ubuntu/blog/`に下記のような`docker-compose.yml`を作成します。

```yaml:/home/ubuntu/blog/docker-compose.yml
version: '2'
services:
  db:
    image: mariadb # mysqlのarm64用のイメージが用意されていないのでmariadbを使用
    volumes:
      - "./.data/db:/var/lib/mysql"
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    links:
      - db
        # 8000番ポートにマッピングする必要がないのでコメントアウト
        #    ports:
        #      - "8000:80"
    expose: # 80番ポートにアクセスしたいので公開しておきます
      - 80
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_PASSWORD: wordpress
      VIRTUAL_HOST: blog.pi4.local # 使用するサブドメイン名に変更します

# nginx-proxyが監視しているDockerネットワークに参加
networks:
  default:
    external:
      name: nginx-proxy
```

起動してみて以下のようになっていればOKです。

```bash
$ docker-compose up -d
$ docker ps
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                NAMES
1e102858616b        nginx-proxy_nginx-proxy   "/app/docker-entrypo…"   7 hours ago         Up 10 minutes       0.0.0.0:80->80/tcp   nginx-proxy
d55553138a83        wordpress:latest          "docker-entrypoint.s…"   8 hours ago         Up 10 minutes       80/tcp               wp-test_wordpress_1
cf647e31827f        mariadb                   "docker-entrypoint.s…"   8 hours ago         Up 10 minutes       3306/tcp             wp-test_db_1
```


自分でDNSの設定を変更することができるのであれば`blog.pi4.local`をDNSに登録します。とりあえずテストであれば、クライアント側のPC上で`/etc/hosts`にこのホスト名とIPアドレスの関連をセットします。

クライアント側のブラウザから`http://blog.pi4.local`にアクセスしていつもの画面が現れたらOKです。

{{< blog-img "wordpress_init.png" >}}

## mDNSで任意のサブドメインもアナウンス

mDNSはサブドメインの面倒をみてくれない仕様のようで、きちんとしたDNSを立てるか`/etc/hosts`に登録が必要だということに気がつかずしばし悩みました。できればmDNSの設定でなんとかならないかなと調べたところ、どうも単純ではない様子ですが、[こちら](https://github.com/lathiat/avahi/issues/40)のissueを参考に、とりあえず目的が達成できるようになったのでメモしておきます。

### まずは固定IPアドレスに変更

Ubuntu 18.04になって（17.10以降のようです）IPアドレスの変更方法が大分変わったようで、調べてみると`/etc/netplan/50-cloud-init.yaml`を以下のように編集します。ここで注意が必要なのは、ネットワークインターフェイス名が`enp0s3`となっている例が多くありますが、この部分はシステムが実際に認識しているネットワークインターフェイス（ここではeth0）をセット必要があります。

```yaml
# This file is generated from information provided by
# the datasource.  Changes to it will not persist across an instance.
# To disable cloud-init's network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    version: 2
    renderer: networkd
    ethernets:
        eth0: # `ip address`で設定したいネットワークインターフェイスを確認
            dhcp4: no
            dhcp6: no
            addresses: [192.168.1.33/24]
            gateway4: 192.168.1.1
            nameservers:
                addresses: [192.168.1.1, 8.8.8.8]
```                

### サブドメインを登録するサービスの定義

`avashi-publish`というコマンドを使うと、サブドメインをアナウンスできるようなります。しかしこれをシステムリブート時に毎回行うのも大変です。この[コメント](https://github.com/lathiat/avahi/issues/40#issuecomment-466351346)に記載されたスクリプトを使うと、システムサービスとしてサブドメインの登録を自動化できます。

下記のような`/etc/systemd/system/avahi-subdomain@.service`という新しいファイルを作成します。

```bash
[Unit]
Description=Publish %I.%H.local via mdns

[Service]
Type=simple
# ExecStart=/bin/bash -c "/usr/bin/avahi-publish -a -R %I.$(avahi-resolve -4 -n %H.local)"
ExecStart=/bin/bash -c "/usr/bin/avahi-publish -a -R %I.%H.local $(ip -f inet address show dev eth0 | grep 'inet' | cut -d/ -f1 | awk '{print $2}')"

[Install]
WantedBy=multi-user.target
```

今回はDockerを使っているため自ホスト名に対するIPアドレスが複数存在し、`avahi-resolve`の結果が必ずしも期待する外向きのIPアドレスとはならないため、eth0に割り当てられたIPアドレスを取得するよう変更してあります。

### サービスの登録

サービスの登録は次のコマンドとなります。

```bash
ubuntu@pi4:~$ sudo systemctl enable --now avahi-subdomain@blog.service
Created symlink /etc/systemd/system/multi-user.target.wants/avahi-subdomain@blog.service → /etc/systemd/system/avahi-subdomain@.service.
```

ここで@マークに続いて`サブドメイン名.service`、今回の例では`blog.service`を指定しています。クライアント側のブラウザから`http://blog.pi4.local`にアクセスしてWordPressの初期画面が表示されれば成功です！サービスとして登録されていますので、次回再起動したときも自動的にサブドメインの登録が行われます。

## まとめ

ウェブアプリケーション側での`docker-compose.yml`において、以下の設定をすれば自動的に追加されるハズ！

- コンテナ側の待ち受けポートも80番になるので`expose: 80`とする
- 環境変数`VIRTUAL_HOST: blog.pi4.local`によってサブドメイン名が決定される
- `networks`で`nginx-proxy`と同じコンテナネットワークに参加する
