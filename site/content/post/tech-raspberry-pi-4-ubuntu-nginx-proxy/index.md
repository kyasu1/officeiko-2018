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
- src: image-1.jpg
  title: Title goes here
---

`Docker`および`docker-compose`で構成されたコンテナ上で実行される、複数のウェブアプリ等を一台のPC上で実行したい。例えばこんなイメージ:

```bash
http://www.pi4.local/ => /var/www/html/docker-compose.yml
http://app1.pi4.local/ => /app/app1/docker-compose.yml
http://app2.pi4.local/ => /app/app2/docker-compose.yml
```

nginxをリバースプロキシとして使うと実現できるのですが設定が難しそう。もっと手軽な方法を探していたところ、[こちら](https://blog.ssdnodes.com/blog/host-multiple-websites-docker-nginx/)の記事を見つけました。その記事の元になった[`nginx-proxy`](https://github.com/jwilder/nginx-proxy)というリポジトリと、その[解説](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/)に詳しい仕組みが書いてありますが、`VIRTUAL_HOST=`という環境変数を持つ`Docker`コンテナを見つけると、自動的に`nginx`のリバーシブルプロキシの設定を作成し、指定されたサブドメインへのアクセスを適切なコンテナへ誘導してくれます。さらにこの`nginx-proxy`自体が`Docker`コンテナとなっているため、ローカル環境を汚さずに容易に立ち上げることができます。もうすべて`Docker`でいいんじゃない？て感じです。

実際に試したところ上手く行ったので記録しておきます。

## 前提

- Raspberry Pi 4で64bit版であるArm64向けのUbuntu 18.03.4を使っています。
- 最新のDockerおよびdocker-composeがインストール済み。詳細は以前の[記事](/post/tech-raspberry-pi-4-ubuntu-docker/)を参照してください。

### `Docker`ネットワークの作成

```bash
$ docker network create nginx-prox
```

### arm64に対応したDockefileの準備

`nginx-proxy`のリポジトリではarm64用の`Dockerfile`が提供されていないため、既存のx86用の`Dockerfile`を基に、Foregoのarm64版が[公式サイト](https://dl.equinox.io/ddollar/forego/stable)にてダウンロード可能になっているので、そちらを利用するように変更しています。

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

## docker-compose.ymlの準備

```yaml
version: "3"
services:
  nginx-proxy:
    build: .
    container_name: nginx-proxy
    ports:
      - "80:80"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro

networks:
  default:
    external:
      name: nginx-proxy
```      