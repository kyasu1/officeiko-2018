---
title: Raspberry Pi 4 でSSDからUbuntuを起動
date: 2019-12-24T23:18:46+09:00
draft: false
author: Yasu
category: tech
tags:
- Raspberry Pi
- Ubuntu
resources:
- src: 01_Raspi-PGB001.png
  title: 
- src: JMicron.jpg
  title:
- src: Transcend.jpg
  title:  
---
{{< blog-img "01_Raspi-PGB001.png" >}}

現状のRaspberry Pi 4ではSSDをUSB接続してOSを直接起動することができないため、SDカード上のブートパーティションから起動し、SSD上のルートパーティションを使用する方法が [https://jamesachambers.com/](https://jamesachambers.com/) の一連のブログの中で紹介されていて、こちらを参考に手順をまとめておきます。

## Raspberry Pi用にカスタマイズされたUbuntu 18.04.3のイメージを入手

先のブログの中で作者が、Raspberry Piで起動可能なイメージを用意してくれているのでそちらを利用させていただきます。

[https://github.com/TheRemote/Ubuntu-Server-raspi4-unofficial/releases](https://github.com/TheRemote/Ubuntu-Server-raspi4-unofficial/releases)

最新版をのイメージをダウンロードし、用意したSDカードおよびSSDの両方に書き込みます。Macなので[balenaEtcher](https://www.balena.io/etcher/)を使用しました。

## SDカードから起動

最初はSSDは接続せずにSDカードのみで起動します。起動したら

```
username: ubuntu
password: ubuntu
```

としてログインし、指示どおり新しいパスワードの設定をします。この時点ではパッケージのアップデートなどは行いません。

## USBアダプタの確認

今回購入した[全部入りセット](https://www.amazon.co.jp/gp/product/B07YM3Z2QR/)に含まれていた、USB/SATA変換アダプタ

{{< blog-img "JMicron.jpg" >}}

について調べてみるとJMicron製でした。

```bash
$ sudo lsusb
Bus 002 Device 002: ID 152d:0578 JMicron Technology Corp. / JMicron USA Technology Corp.
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 2109:3431 VIA Labs, Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

残念ながらブログ記事の中で問題なく動くとされているアダプターの一覧には該当せず、一方、問題のあるアダプタにもリストアップはされていませんでしたが、実際にうまく起動ができませんでした。とりあえずの回避策が紹介されていますので、そちらに従って`/boot/firmware/cmdline.txt`の先頭に`usb-storage.quirks=????:????:u`を挿入します。この`????:????`の部分を先のアダプター名の前に書かれたIDに置き換えます。

変更前

```
snd_bcm2835.enable_headphones=1 snd_bcm2835.enable_hdmi=1 snd_bcm2835.enable_compat_alsa=0 dwc_otg.lpm_enable=0 console=serial0,115200 console=tty1 fsck.repair=yes fsck.mode=auto root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait
```

変更後

```bash:a
usb-storage.quirks=152d:0578:u snd_bcm2835.enable_headphones=1 snd_bcm2835.enable_hdmi=1 snd_bcm2835.enable_compat_alsa=0 dwc_otg.lpm_enable=0 console=serial0,115200 console=tty1 fsck.repair=yes fsck.mode=auto root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait
```

このファイルは長いですが一行である必要があるので無駄な改行を入れいないように注意が必要です。

また部屋に転がっていた[Transcend StoreJet](https://amzn.to/2QekO77)というケース

{{< blog-img "Transcend.jpg" >}}

を試してみると、ASMedia Technology製のアダプタが内蔵されていて、こちらの場合は上記の回避策を施さなくても起動することができました。

## PARTUUIDの変更

次に起動した状態でSSDを接続しドライブの状態を確認します。

```bash
$ sudo fdisk -l

...

Disk /dev/mmcblk0: 29.3 GiB, 31439454208 bytes, 61405184 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xf65c7036

Device         Boot  Start      End  Sectors  Size Id Type
/dev/mmcblk0p1 *      2048   526335   524288  256M  c W95 FAT32 (LBA)
/dev/mmcblk0p2      526336 61405150 60878815   29G 83 Linux


Disk /dev/sda: 74.5 GiB, 80026361856 bytes, 156301488 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 33553920 bytes
Disklabel type: dos
Disk identifier: 0xf65c7036

Device     Boot  Start     End Sectors  Size Id Type
/dev/sda1  *      2048  526335  524288  256M  c W95 FAT32 (LBA)
/dev/sda2       526336 5614312 5087977  2.4G 83 Linux
```

`/dev/mmcblk0`がSDカードに該当します。そして、接続したSSDドライブは`/dev/sda`に割り当てられていることがわかります。上のUSB 3.0ポートが`/dev/sda`で下のポートが`/dev/sdb`となるようです。

ここで、同じイメージを展開しているため、どちらも`Disk identifier: 0x65c7036`となっています。この状態ですと、システム起動時に混乱が発生してしまうので、SSD側のPARTUUIDに異なる値を設定します。

{{< highlight bash "linenos=true, hl_lines=8 20 22 24 28 30">}}
$ sudo fdisk /dev/sda

Welcome to fdisk (util-linux 2.31.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help): p
Disk /dev/sda: 74.5 GiB, 80026361856 bytes, 156301488 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 33553920 bytes
Disklabel type: dos
Disk identifier: 0xf65c7036

Device     Boot  Start     End Sectors  Size Id Type
/dev/sda1  *      2048  526335  524288  256M  c W95 FAT32 (LBA)
/dev/sda2       526336 5614312 5087977  2.4G 83 Linux

Command (m for help): x

Expert command (m for help): i

Enter the new disk identifier: 0xd34db33f

Disk identifier changed from 0xf65c7036 to 0xd34db33f.

Expert command (m for help): r

Command (m for help): w
The partition table has been altered.
Syncing disks.
{{< / highlight >}}

結果を確認してみます。

```bash
$ sudo blkid
/dev/mmcblk0p1: LABEL="system-boot" UUID="E497-1FDF" TYPE="vfat" PARTUUID="f65c7036-01"
/dev/mmcblk0p2: LABEL="writable" UUID="bfa0733b-bdb9-4846-914a-45160bac3ed0" TYPE="ext4" PARTUUID="f65c7036-02"
/dev/sda1: LABEL="system-boot" UUID="E497-1FDF" TYPE="vfat" PARTUUID="d34db33f-01"
/dev/sda2: LABEL="writable" UUID="bfa0733b-bdb9-4846-914a-45160bac3ed0" TYPE="ext4" PARTUUID="d34db33f-02"
/dev/mmcblk0: PTUUID="f65c7036" PTTYPE="dos"
```

`/dev/sda`のPARTUUIDが`d34db33f`で始まる文字列になっているのがわかります。

## SSD上のシステムから起動するように変更

`/boot/firmware/cmdline.txt`をエディタで開き、起動時に参照するルートパーティションを指定している`root=`の部分を下記のように変更します。

変更前

```bash
...省略 fsck.mode=auto root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait
```

変更後

```bash
...省略 fsck.mode=auto root=PARTUUID=d34db33f-02 rootfstype=ext4 elevator=deadline rootwait
```

PARTUUIDとして指定することにより、どちらのUSB3.0ポートに接続しても起動します。もし、必ず同じポートに接続すると決めるなら`/dev/sda2`といった書き方のほうがわかりやすいかもしれません。

以上の作業に間違いがないことを確認して再起動をします。SSD上のルートパーティションから起動しているはずなので、`ubuntu:ubuntu`でログインして新しいパスワードを再度設定します。IPアドレスも変わってしまっているので注意が必要です。

以下のように`/dev/sda2`から起動していれば成功です。

```bash
$ findmnt -n -o SOURCE /

/dev/sda2
```

## パッケージの更新

ブログ記事の作者がRaspberry Pi向けのFixを含めたアップデータを`/home/Updater.sh`に用意してくれていますのでこちらを実行します。

```bash
$ sh /home/Updater.sh
```

以上でセットアップ完了です。

`/etc/fstab`の修正やSSDの容量を正しく反映する作業がブログ記事にはありましたが、Ubuntuの場合は必要がないようです。

<!-- <div align="center" class="py-2">
<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=pc_parts&banner=0F37127ZXBMSRFD8Q7R2&f=ifr&linkID=db426bfb7cbf5630a7b97696635157d3&t=kyasu1-22&tracking_id=kyasu1-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
</div> -->

## その他の初期設定

[こちら](https://qiita.com/kotarella1110/items/f638822d64a43824dfa4)の記事にまとまっているので必要に応じて設定します。

## おわりに

Raspberry Pi 4自体のパフォーマンスが上がったのもありますが、やはりSSD上にルートパーティションがあるとパッケージのアップデートなどもサクサク進んで快適です。軽いタスクがメインの省エネサーバーとしてならば十分かつストレスなく活躍しそうです。