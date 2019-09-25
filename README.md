# When you are at any height, underline with marker.
# 任意の高さに来た時に、マーカーで下線を引く。

create a gradient underline and rotate it.
グラデーションで下線を引いた後に、回転させる。


## HTML内にjsとcssへのリンクを貼る。

```HTML
<link rel="stylesheet" href="css/markerUnderline.css">
<script src="js/markerUnderline.js"></script>
```


## マーカーを引きたい要素に`marker`classを設定する。

```HTML
<span class="marker">テキスト</span>
```


## マーカーの色は`mkOrange`classもしくは`mkCyan`classを同時に設定する。

```HTML
<span class="marker mkOrange">テキスト</span>
```

## マーカーの色を新しく作りたい場合は、cssの`background`でグラデーションを指定して作る。

```CSS
.mkCyan span {
  box-shadow: 0 0 1px #a3e7ed;
  background: linear-gradient(to right, #6b8dd6 0%,#71cae2 4%,#a3e7ed 71%,#71cae2 91%,#71cae2 100%);
  //↑この部分
}
```

### 注意事項

・マーカー部分のテキストが次の行にまたがる場合、マーカー開始部分で改行される。
