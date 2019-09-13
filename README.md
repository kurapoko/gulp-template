# gulpテンプレート

## 概要
普段使用しているgulpのテンプレートファイルを管理しています。  
プラグインを適宜追加し、タスクを改善しています。

## 利用手順  
 - 1.gulpfile.jsとpackage-lock.jsonとsrcディレクトリを配置する。
 - 2.npm installコマンドを実行する。

## プラグインのインストールコマンド
	`npm install -D gulp プラグイン名`

## プラグイン一覧

| プラグイン名 | 概要 | URL |
|:-----------|:------------|:------------|
| browser-sync | ローカルサーバーのリロード | https://www.npmjs.com/package/browser-sync |
| gulp-sass | Sassの使用 | https://www.npmjs.com/package/gulp-sass |
| gulp-autoprefixer | Sassにベンダープレフィックスをつける | https://www.npmjs.com/package/gulp-autoprefixer |
| gulp-sourcemaps | Sassのsourcemapを作成する | https://www.npmjs.com/package/gulp-sourcemaps |
| gulp-typescript | TypeScriptの使用 | https://www.npmjs.com/package/gulp-typescript |
| fs | JSONを使うために使用 | https://www.npmjs.com/package/fs |
| gulp-watch | ファイルの変更を監視する | https://www.npmjs.com/package/gulp-watch |
| gulp-ejs | テンプレートエンジンのEJSを使用する | https://www.npmjs.com/package/gulp-ejs |
| gulp-notify | エラーメッセージを通知する | https://www.npmjs.com/package/gulp-notify |
| gulp-plumber | gulpのエラーが発生しても処理を継続する | https://www.npmjs.com/package/gulp-plumber |
| gulp.spritesmith | CSSスプライトを作成する | https://www.npmjs.com/package/gulp.spritesmith |
| gulp-imagemin<br>imagemin-jpeg-recompress<br>imagemin-pngquant<br>imagemin-gifsicle   | 画像を圧縮する | https://www.npmjs.com/package/gulp-imagemin<br>https://www.npmjs.com/package/imagemin-jpeg-recompress<br>https://www.npmjs.com/package/imagemin-pngquant<br>https://www.npmjs.com/package/imagemin-gifsicle |
| gulp-if | gulpコマンドの中で条件分岐をできるようにする | https://www.npmjs.com/package/gulp-if |
| minimist | gulpコマンドの中で引数を持たせることができるようにする | https://www.npmjs.com/package/minimist |


## タスクを実行する
	npm run dev(ローカルサーバーを立ち上げ、開発環境を起動する)
	npm run prod(納品用ファイルを作成する)
	npm run imagemin(画像圧縮処理を実行する)


## バージョン情報

```
node -v
v12.8.0

npx -v
6.10.2

npm -v
6.10.2

```
