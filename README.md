# gulpテンプレート
私が普段使用しているgulpのテンプレートファイルをバージョン管理しています。

## 手順  
- 手順1  
プロジェクトフォルダにpackage.jsonファイルを作成する。<br>
	`npm init -y`<br><br>
- 手順2<br>
Gulpをローカル環境にインストールする<br>
	`npm install -D gulp`<br><br>
- 手順3<br>
プラグインをインストールする(下記コマンドを参照)

## プラグインのインストールコマンド<br>
	`npm install -D gulp プラグイン名`
- sass系<br>
	`npm install -D gulp gulp-sass`<br>
	`npm install -D gulp gulp-autoprefixer`<br>
	`npm install -D gulp gulp-sourcemaps`
- TypeScript<br>
	`npm install -D gulp gulp-typescript`
- json<br>
	`npm install -D gulp fs`
- 監視<br>
	`npm install -D gulp gulp-watch`
- HTML系<br>
	`npm install -D gulp gulp-ejs`
- ブラウザーシンク<br>
	`npm install -D gulp browser-sync`
- エラー関連<br>
	`npm install -D gulp gulp-notify`<br>
	`npm install -D gulp gulp-plumber`
- ファイルのリネーム<br>
	`npm install -D gulp gulp-rename`
- cssスプライト<br>
	`npm install -D gulp gulp.spritesmith`<br>
- 画像圧縮<br>
	`npm install -D gulp gulp-imagemin`<br>
	`npm install -D gulp imagemin-jpeg-recompress`<br>
	`npm install -D gulp imagemin-pngquant`<br>
	`npm install -D gulp imagemin-gifsicle`

## 上記プラグインを一括インストールするコマンド  
	npm install -D gulp require-dir gulp-sass gulp-sourcemaps gulp-autoprefixer gulp-watch gulp-plumber gulp-rename gulp-ejs fs browser-sync gulp-notify gulp.spritesmith gulp-imagemin imagemin-jpeg-recompress imagemin-pngquant imagemin-gifsicle

## タスクを実行する
    npx gulp
    
## 一括で設定する場合は、
 - 1.gulpfile.jsとpackage-lock.jsonとpackage.jsonとsrcディレクトリを配置する。
 - 2.npm installコマンドを実行する。

## バージョン情報

```
node -v
v12.8.0

npx -v
6.10.2

npm -v
6.10.2

```
