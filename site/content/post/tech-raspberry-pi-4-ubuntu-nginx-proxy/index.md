---
title: ラズパイ上のUbuntuでnginx-proxyを走らせて複数のウェブアプリをホストする
date: 2019-12-25T17:14:25+09:00
draft: true
author: Yasu
category: tech
tags:
- Raspberry Pi
- Ubuntu
- Docker
- nginx
resources:
resources:
- src: nginx_logo.png
  title: nginxのロゴ
- src: wordpress_init.png
  title: WordPressのインストール画面
---
{{< blog-img "nginx_logo.png" >}}

`Docker`および`docker-compose`で構成されたコンテナ上で実行される、複数のウェブアプリ等を一台のPC上で実行したい。例えばこんなイメージ:

```bash
http://blog.pi4.local/ => /home/ubuntu/blog/docker-compose.yml
http://app1.pi4.local/ => /home/ubuntu/app1/docker-compose.yml
http://app2.pi4.local/ => /home/ubuntu/app2/docker-compose.yml
```

nginxをリバースプロキシとして使うと実現できるのですが調べてみると設定が難しそう…もっと手軽な方法を探していたところ、[こちら](https://blog.ssdnodes.com/blog/host-multiple-websites-docker-nginx/)の記事を見つけました。この記事の元になった[`nginx-proxy`](https://github.com/jwilder/nginx-proxy)というリポジトリと、その[解説](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/)に詳しい仕組みが書いてあります。

`VIRTUAL_HOST=`という環境変数を持つDockerコンテナを同じネットワーク上に見つけると、自動的にnginxのリバースプロキシの設定を作成し、要求されたサブドメインへのアクセスを適切なコンテナへ誘導してくれます。さらにこの`nginx-proxy`自体がDockerコンテナとなっているため、ローカル環境を汚さずに容易に立ち上げることができます。もうすべてDockerでいいんじゃない？て感じです。

実際に試したところ上手く行ったので記録しておきます。

## `nginx-proxy`コンテナのセットアップ

今回もRaspberry Pi 4上で64bit版のarm64向けUbuntu 18.03.4を使っています。最新のDockerおよびdocker-composeがインストール済みです。詳細は以前の[記事](/post/tech-raspberry-pi-4-ubuntu-docker/)を参照してください。

### `Docker`ネットワークの作成

`nginx-proxy`がコンテナの追加を監視するDockerコンテナ・ネットワークを作成します。

```bash
$ docker network create nginx-prox
```

### arm64に対応したDockefileの準備

`nginx-proxy`のリポジトリではarm64用の`Dockerfile`が提供されていないため、既存のx86用の`Dockerfile`を基にしました。Foregoのarm64版が[公式サイト](https://dl.equinox.io/ddollar/forego/stable)にてダウンロード可能になっているので、そちらを利用するように変更しています。

```Dockerfile
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


# Install Forego
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
```

### docker-compose.ymlの準備

`docker-compose.yml`ではこのDockerファイルをビルドすることにより`nginx-proxy`を立ち上げる設定に変更します。

```yaml
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
```

準備ができたら

```bash
$ docker-compose up -d
```
としてコンテナを起動します。

## ウェブアプリケーション側の設定

試しにDockerの公式の[ドキュメント](http://docs.docker.jp/compose/wordpress.html)で紹介されているWordPressを立ち上げる`docker-compose.yml`に少し変更を加えて`blog.example.com`として立ち上げる例を用意してみました。

```yaml
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

適当なディレクトリを作成してこの`docker-compose.yml`を配置し、問題なく起動することを確認します。

```bash
$ mkdir blog
$ nano docker-compose.yml
$ docker-compose up
```

自分でDNSの設定を変更することができるので`blog.pi4.local`を登録するか`*.pi4.local`を、とりあえずテストであればクライアント側のPC上の`/etc/hosts`にこのホスト名とIPアドレスの関連をセットします。

クライアント側のブラウザから`http://blog.pi4.local`にアクセスすると、

{{< blog-img "wordpress_init.png" >}}

いつもの画面が現れたらOKです。


## mDNSで任意のサブドメインもアナウンス

mDNSがサブドメインは面倒をみてくれないため、きちんとしたDNSを立てるか`/etc/hosts`に登録が必要だということに気づかず、ちょっとハマりました。できればmDNSの設定でなんとかならないかなと調べたところ、どうも単純ではない様子。[こちら](https://github.com/lathiat/avahi/issues/40)のissueを参考にとりあえず目的が達成できるようになったのでメモ。

### まずは固定IPアドレスに変更

Ubuntu 18.04になって（17.10以降のようです）IPアドレスの変更方法が大分変わったようで、ぐぐると次のファイルをする必要があります。ここで注意が必要なのは、ネットワークインターフェイス名が`enp0s3`とかになっている例が多くありますが、この部分をシステムが実際に認識しているネットワークインターフェイスにする必要があります。

https://www.tecmint.com/configure-network-static-ip-address-in-ubuntu/

```yaml:/etc/netplan/50-cloud-init.yaml
# This file is generated from information provided by
# the datasource.  Changes to it will not persist across an instance.
# To disable cloud-init's network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    version: 2
    renderer: networkd
    ethernets:
        eth0: # ip address で設定したいネットワークインターフェイスを確認
            dhcp4: no
            dhcp6: no
            addresses: [192.168.1.33/24]
            gateway4: 192.168.1.1
            nameservers:
                addresses: [192.168.1.1, 8.8.8.8]
```                

また、コメントにも記載がありますが、`cloud-init`というのが起動時に毎回走って

```yaml:/etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
network: {config: disabled}
```


サブドメイン

https://github.com/lathiat/avahi/issues/40


```bash:/etc/systemd/system/avahi-subdomain@.service
[Unit]
Description=Publish %I.%H.local via mdns

[Service]
Type=simple
# ExecStart=/bin/bash -c "/usr/bin/avahi-publish -a -R %I.$(avahi-resolve -4 -n %H.local)"
ExecStart=/bin/bash -c "/usr/bin/avahi-publish -a -R %I.%H.local $(ip -f inet address show dev eth0 | grep "inet" | cut -d/ -f1 | awk '{print $2}')"

[Install]
WantedBy=multi-user.target
```

```bash
$ sudo systemctl enable --now avahi-subdomain@blog.pi4.service
```