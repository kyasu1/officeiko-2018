---
title: ヤマハのRTX810とVyOSでLAN間接続VPNを設定してみた
date: 2020-03-11T13:12:59+09:00
draft: true
author: Yasu
category: 買取実績
tags:
- ロレックス
resources:
- src: image-1.jpg
  title: Title goes here
---

## はじめに

2011年に「さくらのクラウド」のサービスが開始した際に、社内のサーバーをクラウド上に移行しました。とは言ってもサーバー2台の最小限の構成なので大したことではないのですが…クラウド上にWindowsサーバーとUbuntuサーバーをそれぞれ配置してLANを組み、最小限の構成でVyatta（VyOSの前身）をインストールしたサーバーをVPNゲートウェイとし、会社のネットワークとIPSecによるLAN間接続VPNを構成していました。

当時はヤマハのRTX1100を使用していて、IPIPトンネルを設定してその上にIPSecトンネルを設定するというちょっとややこしい手順が必要を踏んでいました。参考にしたの[こちら](https://www.idcf.jp/help/cloud/guide/pdf/vyos_cloud.pdf)の資料の中で非常に詳しく書かれています。現在も更新はされているようですが、ヤマハのルーターとの接続手順については昔と変わっていないようです。記憶では結構複雑な手順で苦労した思いがあり、二度とやりたくない感じです。

これまでVPN自体は特に問題もなく安定して動作していて、詳細も忘れかけていたのですが、クラウド上のWindows Serverのディスク容量が足りなくなってきて、動作も不安定になったため対応が必要となってきました。大きな容量のディスクに入れ替えればよいのですが、クラウド上のディスクが割高なので躊躇していました。一方で昔ながらの「さくらのVPS」を調べてみると、より高性能なスペックかつ大容量のSSDを含む構成が、クラウド上に同スペックで設けた場合の1/4ぐらいの金額で運用することができることがわかり、移行を検討することにしました。

ただし、VPSを借りただけですとWindows Serverをインターネット上に直接さらすことになるため、セキュリティ上の不安があります。そこでクラウドの場合と同じように最小限のサーバーにVyOSをインストールしたVPNルーターを配置してインターネットからのアクセスを最小限にします。また[ローカル接続](https://help.sakura.ad.jp/206229941/)でLANを組むことにより、Winsows Serverをインターネット上から隠すことが可能になり、さらに社内LANとLAN間接続することにより以前と同じように運用できます。

色々と調べていると、最近のヤマハのルーターのファームウェアも進化していて、どうやらIPIPトンネルを設定しなくても、IKEv2によって直接VyOSとIPSecにて接続できるそうなことがわかってきました。こちらの[記事](https://qiita.com/air-gh/items/ad821ace73a58211fb9b)を見つけたのですが、どうもうまく行っていないようです。また、そこでも触れられていますがなかなかズバリな記事がなく、今回成功したのでメモの意味も含めて手順をここに記録しておきます。

その昔は自宅にWindowsマシンをファイルサーバーやアプリケーション・サーバーとして常時稼働させていたものです。しかし、電気代もかかるしハードウェアのメンテナンスやソフトウェアの管理、バックアップも定期的に必要と、結構な手間がかかりました。近年の目覚ましいインターネットの普及と高速化、仮想化技術の進化、そして高性能なルーターも手軽に入手可能となり、ネットまたはクラウド上にサーバーを配置するのが当たり前になってきています。

### VyOSのインストール

VPSへのインストール手順は[こちら](http://komo-jp.hatenablog.com/entry/2018/07/02/224950)の記事のとおりです。

また共通の基本的な設定は以下のようになります。

```
# インターネット側のインターフェイスを設定
set interfaces ethernet eth0 address 153.xxx.xxx.xxx/23 # 割り当てられたグローバルアドレス
set interfaces ethernet eth0 description Internet

# LAN側のインターフェイスを設定
set interfaces ethernet eth1 address 192.168.15.254/24 # LAN内でのアドレス
set interfaces ethernet eth1 description OFFICEIKO

# デフォルトルートをインターネット側に設定 
set protocols static route 0.0.0.0/0 next-hop 153.xxx.xxx.xxx # 割り当てられたグローバルアドレス

# ネームサーバーのをパブリックDNSに設定
set system name-server 8.8.8.8
set system name-server 8.8.4.4

# タイムゾーンの設定
set system time-zone Asia/Tokyo

# SSHでアクセスする際のポートを変更
set service ssh port 10022

# NATで相手先LANへの
set nat source rule 10 destination address 192.168.1.0/24
set nat source rule 10 exclude
set nat source rule 10 outbound-interface eth0

# NATのIPマスカレードを設定
set nat source rule 999 outbound-interface eth0
set nat source translation address masquerade

commit 
save
exit
```

### VPNの設定

色々と調べたなかで、VyOSの[ドキュメント](https://docs.vyos.io/en/latest/vpn/site2site_ipsec.html#ikev2)にあるサイト間接続のIKEv2の例がとても参考になりました。

```
set vpn ipsec esp-group ESP compression 'disable'
set vpn ipsec esp-group ESP lifetime '3600'
set vpn ipsec esp-group ESP mode 'tunnel'
set vpn ipsec esp-group ESP pfs 'dh-group19'
set vpn ipsec esp-group ESP proposal 10 encryption 'aes256gcm128'
set vpn ipsec esp-group ESP proposal 10 hash 'sha256'
set vpn ipsec ike-group IKE dead-peer-detection action 'hold'
set vpn ipsec ike-group IKE dead-peer-detection interval '30'
set vpn ipsec ike-group IKE dead-peer-detection timeout '120'
set vpn ipsec ike-group IKE ikev2-reauth 'no'
set vpn ipsec ike-group IKE key-exchange 'ikev2'
set vpn ipsec ike-group IKE lifetime '10800'
set vpn ipsec ike-group IKE mobike 'disable'
set vpn ipsec ike-group IKE proposal 10 dh-group '19'
set vpn ipsec ike-group IKE proposal 10 encryption 'aes256gcm128'
set vpn ipsec ike-group IKE proposal 10 hash 'sha256'
set vpn ipsec ipsec-interfaces interface 'eth0.201'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx authentication id 153.xxx.xxx.xxx
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx authentication mode 'pre-shared-secret'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx authentication pre-shared-secret 'secretkey'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx authentication remote-id '219.xxx.xxx.xxx'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx connection-type 'initiate'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx ike-group 'IKE'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx ikev2-reauth 'inherit'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx local-address 153.xxx.xxx.xxx
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx vti bind 'vti10'
set vpn ipsec site-to-site peer 219.xxx.xxx.xxx vti esp-group 'ESP'
```

```
interfaces {
    ethernet eth0 {
        address 153.xxx.xxx.xxx/23
        description Internet
        hw-id 9c:a3:ba:06:ae:c5
    }
    ethernet eth1 {
        address 192.168.15.254/24
        description OFFICEIKO
        hw-id 9c:a3:ba:08:35:65
    }
    ethernet eth2 {
        hw-id 9c:a3:ba:09:bc:05
    }
    loopback lo {
    }
}
nat {
    source {
        rule 10 {
            destination {
                address 192.168.1.0/24
            }
            exclude
            outbound-interface eth0
        }
        rule 999 {
            outbound-interface eth0
            translation {
                address masquerade
            }
        }
    }
}
protocols {
    static {
        route 0.0.0.0/0 {
            next-hop 153.127.26.1 {
            }
        }
    }
}
service {
    ssh {
        port 15022
    }
}
system {
    config-management {
        commit-revisions 100
    }
    console {
        device ttyS0 {
            speed 115200
        }
    }
    host-name VyOS
    login {
        user vyos {
            authentication {
                encrypted-password ****************
                plaintext-password ****************
            }
        }
    }
    name-server 8.8.8.8
    name-server 8.8.4.4
    ntp {
        server 0.pool.ntp.org {
        }
        server 1.pool.ntp.org {
        }
        server 2.pool.ntp.org {
        }
    }
    syslog {
        global {
            facility all {
                level info
            }
            facility protocols {
                level debug
            }
        }
    }
    time-zone Asia/Tokyo
}
vpn {
    ipsec {
        esp-group ESP {
            compression disable
            lifetime 1800
            mode tunnel
            pfs enable
            proposal 1 {
                encryption aes128
                hash sha1
            }
        }
        ike-group IKE {
            close-action none
            dead-peer-detection {
                action restart
                interval 15
                timeout 30
            }
            ikev2-reauth yes
            key-exchange ikev2
            lifetime 28800
            proposal 1 {
                dh-group 2
                encryption aes128
                hash sha1
            }
        }
        ipsec-interfaces {
            interface eth0
        }
        nat-traversal enable
        site-to-site {
            peer 219.xxx.xxx.xxx {
                authentication {
                    id 153.xxx.xxx.xxx
                    mode pre-shared-secret
                    pre-shared-secret ****************
                    remote-id 219.xxx.xxx.xxx
                }
                connection-type initiate
                default-esp-group ESP
                ike-group IKE
                ikev2-reauth inherit
                local-address 153.xxx.xxx.xxx
                tunnel 1 {
                    allow-nat-networks disable
                    allow-public-networks disable
                    local {
                        prefix 192.168.15.0/24
                    }
                    remote {
                        prefix 192.168.1.0/24
                    }
                }
            }
        }
    }
}
```

### ヤマハRTX810側の設定

基本的な設定は巷にあるIKEv1の場合の設定とほぼ同じですが、以下の部分の設定が必要となります。

> IKEv1からIKEv2への移行
>
> これまでIPsec(IKEv1)を運用されてきた場合は、既存の設定を流用しながらIKEv2へ移行することができます。主な違いは、ipsec ike remote nameコマンドと> ipsec ike local nameコマンドの設定が共に必須になっている点と、ipsec ike versionコマンドで明示的にIKEv2の使用を宣言する必要があるという点です。 

また

> 設定が無効なコマンド
>
> 以下に示すコマンドは、IKEv2で動作する場合に設定内容が考慮されません。 
>
> - ipsec ike remote id GATEWAY_ID IP_ADDRESS[/MASK]
> - ipsec ike local id GATEWAY_ID IP_ADDRESS[/MASK]

とあるように、idの部分が不要となるため、混乱を避けるために佐助します。

```
tunnel select 3
 tunnel name VPS
 ipsec tunnel 3
  ipsec sa policy 3 3 esp aes-cbc sha-hmac
  ipsec ike version 3 2
  ipsec ike always-on 3 on
  ipsec ike encryption 3 aes-cbc
  ipsec ike group 3 modp1024
  ipsec ike hash 3 sha
  ipsec ike keepalive log 3 off
  ipsec ike keepalive use 3 on dpd 15 2
  ipsec ike local address 3 192.168.1.1
  ipsec ike local name 3 219.xxx.xxx.xxx ipv4-addr
  ipsec ike payload type 3 2 2
  ipsec ike pfs 3 on
  ipsec ike pre-shared-key 3 text secretkey # 任意の事前共有キー
  ipsec ike remote address 3 153.xxx.xxx.xxx
  ipsec ike remote name 3 153.xxx.xxx.xxx ipv4-addr
  ipsec auto refresh 3 on
 ip tunnel mtu 1280
 ip tunnel tcp mss limit auto
 tunnel enable 3
 ```

### コネクションの確立の確認

```
vyos@VyOS:~$ show vpn ike sa
Peer ID / IP                            Local ID / IP
------------                            -------------
219.xxx.xxx.xxx                           153.xxx.xxx.xxx

    State  IKEVer  Encrypt  Hash    D-H Group      NAT-T  A-Time  L-Time
    -----  ------  -------  ----    ---------      -----  ------  ------
    up     IKEv2   aes128   sha1_96 2(MODP_1024)   no     3600    28800
```

```
# show status tunnel 3
TUNNEL[3]:
Description:
  Interface type: IPsec
  Current status is Online.
  from 2020/03/11 23:18:59.
  3 minutes 46 seconds  connection.
  Received:    (IPv4) 61583 packets [33248342 octets]
               (IPv6) 0 packet [0 octet]
  Transmitted: (IPv4) 51869 packets [6139235 octets]
               (IPv6) 0 packet [0 octet]
  IKE keepalive:
         [Type]: rfc4306
       [Status]: OK
    [Next send]: 2 sec after
```

### おわりに

正直なところ詳細に説明できるほどの知識は全く無いのですが、とりあえず上記の設定で安定して動作しております。