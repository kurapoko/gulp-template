#gulpテンプレート

#プロジェクトフォルダにpackage.jsonファイルを作成する。
npm init -y

#Gulpをローカル環境にインストールする
npm install -D gulp


#プラグインをインストール
npm install -D gulp プラグイン名

# riquireDir
npm install -D gulp require-dir


# sass系
npm install -D gulp gulp-sass
npm install -D gulp gulp-autoprefixer
npm install -D gulp gulp-sourcemaps

# json
npm install -D gulp fs

# 監視
npm install -D gulp gulp-watch

# HTML系
	#ejs
	npm install -D gulp gulp-ejs

#ブラウザーシンク
	npm install -D gulp browser-sync

#エラー関連
	npm install -D gulp gulp-notify
	npm install -D gulp gulp-plumber

#ファイルのリネーム
	npm install -D gulp gulp-rename

#cssスプライト
	npm install -D gulp gulp.spritesmith

#画像圧縮
	npm install -D gulp gulp-imagemin
	npm install -D gulp imagemin-jpeg-recompress
	npm install -D gulp imagemin-pngquant
	npm install -D gulp imagemin-gifsicle






#プラグインを一括で一括インストール
npm install -D gulp require-dir gulp-sass gulp-sourcemaps gulp-autoprefixer gulp-watch gulp-plumber gulp-rename gulp-ejs fs browser-sync gulp-notify gulp.spritesmith gulp-imagemin imagemin-jpeg-recompress imagemin-pngquant imagemin-gifsicle
