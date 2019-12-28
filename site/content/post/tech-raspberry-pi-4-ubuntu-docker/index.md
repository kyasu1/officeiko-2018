---
title: "ラズパイ上のUbuntuにDokcer一式をインストール"
date: 2019-12-25T01:48:12+09:00
draft: false
author: Yasu
category: tech
tags:
- Raspberry Pi
- Ubuntu
- Docker
resources:
- src: Moby-logo.png
  title: 
---
{{< blog-img "Moby-logo.png" >}}

社内で使用しているちょっとした軽量サービスやウェブアプリを、できるだけRaspberry Pi 4上で走らせて省エネサーバーとして利用したいというのが事の始まり。なにはともあれDockerとdocker-composeのインストールが必要なので、その手順をメモしておきます。

## 現在の環境

- OS Ubuntu 18.04.3


## Docker CEをリポジトリからインストール

Docker自体のインストールは至極かんたんというか、公式でarm64版が用意されているので、[ドキュメント](https://docs.docker.com/install/linux/docker-ce/ubuntu/)に従ってインストールします。

インストール手順を一応書いておきます。

### 1. パッケージインデックスを最新に更新

```bash
$ sudo apt-get update
```

### 2. HTTP経由でパッケージをインストールするための準備

```bash
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

### 3. DockerのオフィシャルGPGキーを登録

```bash
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

### 4. arm64版のレポジトリを追加

```
$ sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

### 5. Dockerエンジンのコミュニティ版をインストール

```bash
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### 6. 正しくインストールされたか検証

```bash
$ sudo docker run hello-world
```

### 7. 一般ユーザでもdockerを使えるようにする

毎回`sudo`つけるのも面倒なので、`ubuntu`アカウントでも使えるように`/etc/group`の`docker`に`ubuntu`を追加します。

```bash
$ sudo gpasswd -a ubuntu docker
```

すぐには反映されないので、ログインし直します。

## docker-composeのインストール

残念ながら公式でものレポジトリではdocker-composeのarm64版が用意されていないので、[ドキュメント](https://docs.docker.com/compose/install/#install-using-pip)にしたがって、`python3`の`pip`を使ってソースからビルドする必要があります。まずは`python3`一式をインストールします。

```bash
$ sudo apt-get install python3-pip
```

またコンパイル時に`libffi-dev`というライブラリが必要となるので先にインストールします。

```bash
$ sudo apt-get install libffi-dev
```

準備が整ったのでdocker-composeをインストールします。

```bash
$ sudo pip3 install -U docker-compose
```

以上で完了です。