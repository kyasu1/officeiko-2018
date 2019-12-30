---
title: Hugoのシンタックスハイライトを設定する
date: 2019-12-30T11:19:14+09:00
draft: false
author: Yasu
category: tech
tags:
- Hugo
- Go言語
resources:
- src: hugo.png
  title: Hugoのロゴ
---
{{< blog-img "hugo.png" >}}

ブログ記事内のソースコードをカラフルに表示する際に、一般的に[WordPress](https://ja.wordpress.com/)のような動的なCMSではJavaScriptで書かれたプラグインなどを使用します。これらはレンダリング時に書き換えを行うため、ソースコードの量が多くなるとどうしても重くなりがちです。一方、このサイトでは[Hugo](https://gohugo.io/)という静的サイトジェネレーターを使っています。シンタックスハイライトの機能が含まれているため、サイトの生成時にソースコードの部分を装飾したHTMLに変換して出力してくれます。このためサイトを閲覧する際の高速化に一役買ってくれています。使い方や気づいた点をメモしておきます。

## 環境

- Hugo 0.62.0

## カスタマイズ内容をconfig.tomlに設定

最近のバージョン(`0.60.0`)から特に何も設定しなくても、マークダウンのコードブロック部分のシンタックスハイライトが有効になっており、下記がデフォルトの設定にとなります。

```toml
[markup]
  [markup.highlight]
    codeFences = true
    guessSyntax = false
    hl_Lines = ""
    lineNoStart = 1
    lineNos = false
    lineNumbersInTable = true
    noClasses = true
    style = "monokai"
    tabWidth = 4
```

### スタイル

デフォルトのスタイルとして`monokai`が適用されることがわかります。その他にも[多くのスタイル](https://xyproto.github.io/splash/docs/longer/all.html)が用意されているので、好きなスタイルを選んで`style`に設定します。

### 行番号

行番号表示の設定は2箇所に別れていて、`lineNos = true`とすると全てのコードブロックで行番号が表示されるようになります。また、`lineNumbersInTable = true`となっているので、ソースコードの選択がしやすいように行番号とソースコード部分に分割されて表示します。行番号もインラインで表示したい場合は、`lineNumbersInTable = false`とします。

## ブログ記事の中でカスタマイズ

ソースコードの種類によって行番号の表示方法を変えたい場合に、ブログ記事のマークダウンの中でデフォルトの設定を上書きすする方法が用意されています。

### ショートコードを使う

`highlight`というショートコードが用意されていてます。ここで注意が必要なのが先程の設定ファイルとは指定の方法が異なることです…


```go-text-template
{{</* highlight go "linenos=true" */>}}
// ... code
{{</* / highlight */>}}
```

`linenos`というパラメータ一つによって制御し、各ブロックごとに表示方法を設定することができます。

```toml
linenos=true

# または

lineos=inline
```

とすると行番号をインラインで表示します。

```toml
linenos=table
```

とすると行番号とソースコードを分割して表示します。また、

```toml
linenos=false
```

とすると行番号を非表示にできます。

`linenos=true`と`linenos=inline`の違いは出力されたHTMLを見る限りでは違いがわかりませんでした。

**※タイポがあっても特にエラーは出力されずに`linenos=true`とした結果が表示されるので注意が必要です**。

### マークダウンでの指定

`0.62.0`から以下のようにマークダウン記法のコードブロックでも指定ができるようになりました。

````go-text-template
```go {linenos=true}
// ... code
```
````

ここでパラメータにダブルクオート(`"`)をつけると反映されません。また`lineNos`と設定ファイルに合わせて一部大文字にすると反映されません…

### その他のオプション

`hi_lines`というオプションを指定すると、任意の行をハイライト表示できます。また、行番号を表示する際に先頭になる番号を指定する`linenostart`というオプションも用意されています。それぞれ以下のように指定します。


#### ショートコード`highlight`を使う場合

```go-text-template
{{</* highlight elm "linenos=table,hl_lines=8 20-22,linenostart=10" */>}}
# ... code
{{</* / highlight */>}}
```

#### マークダウンのコードブロックを使う場合

````go-text-template
```elm {linenos=table,hl_lines=[8, "20-22"],linenostart=10}
# ... code
```
````

**※ショートコードとマークダウンでオプションの指定方法が微妙に異なるので要注意です**

ここでは8行目および20-22行目をハイライト表示するように指定しています。また行番号の先頭を10に設定しています。結果はこちらになります。

{{< highlight elm "linenos=table,hl_lines=8 20-22,linenostart=10" >}}
import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
```

```elm {linenos=table,hl_lines=[8, "20-22"]}
import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
{{< / highlight >}}

### スタイルの適用

デフォルトの状態ですとシンタックスハイライトされた部分全体に対する余白が狭かったり、横に長いコードが画面からはみだしてしまいます。

```html
<pre>
  <code>
    ... code
  </code>
</pre>
```

このようなHTMLとして表示されますので、この辺は別途適当なCSSでの設定が必要です。

```css
pre {
  padding: 0.5rem;
  overflow-x: scroll;
}
```

### インラインコードのスタイル

ひとつ困ったことがありました。コードを`インライン`表示で書くと`code`タグとして表示されますが、このタグに任意のCSSを当てていると、先のコードにも反映されてしまい、シンタックスハイライト表示が崩れてしまいます。とりあえず動作する解決方法が下記になります。

```css
:not(pre) > code {
  background-color: #111;
  color: #999;
  padding: 0.1rem;
}
```

直接の親に`pre`を持たない`code`タグ全てにこのスタイルを適用しています。

## 終わりに

GoHugoという名のとおりGo言語で書かれているためGoの特徴（癖？）を多く引き継いでいるのかなという印象です。以前にGo言語を少し勉強して挫折😢したことがあるのでなんとか使えています😅。