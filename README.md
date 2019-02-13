# gulp-template
作業用gulp

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

# json
npm install -D gulp fs

# 監視
npm install -D gulp gulp-watch

# HTML系
	#エラー
	npm install -D gulp gulp-plumber
	#ファイル名変更
	npm install -D gulp gulp-rename
	#ejs
	npm install -D gulp gulp-ejs

#ブラウザーシンク
	npm install -D gulp browser-sync

#エラー通知
	npm install -D gulp gulp-notify
  
#タスクを実行する
npx gulp
