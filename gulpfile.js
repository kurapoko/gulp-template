'use strict';

const { series } = require('gulp');
const html = require('./gulp/tasks/html');
const server = require('./gulp/tasks/server');
const image = require('./gulp/tasks/image');
const css = require('./gulp/tasks/css');
const script = require('./gulp/tasks/script');
const reload = require('./gulp/tasks/reload');
const observe = require('./gulp/tasks/observe');

module.exports = {
  default: series(image, html, css, script, observe, server, reload, observe)
}

// 初期設定(プラグインの読み込み)
// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const ts = require('gulp-typescript');
// const ejs = require('gulp-ejs');
// const fs = require('fs');
// const rename = require('gulp-rename');
// const prefix  = require('gulp-autoprefixer');
// const plumber = require('gulp-plumber');
// const notify = require('gulp-notify');
// const spritesmith = require('gulp.spritesmith');
// const imagemin = require('gulp-imagemin');
// const imageminJpg = require('imagemin-jpeg-recompress');
// const imageminPng = require('imagemin-pngquant');
// const imageminGif = require('imagemin-gifsicle');
// const minimist = require('minimist');
// const gulpIf = require('gulp-if');
// const browserSync = require('browser-sync').create();

// const options = minimist(process.argv.slice(2), {
// 	string: 'env',
// 	default: {
// 		env: 'develop'
// 	}
// });

// // develop or production
// const env = options.env;

// // ビルドディレクトリ(本番とdev)
// const paths = {
// 	develop: 'dev',
// 	production: 'prod'
// }
// // アセットディレクトリ(状況に応じて書き換え)
// const Build = 'build';
// const Assets = 'assets';
// const imgDir = 'images';


// // SASSの設定
// gulp.task('sass', function (done) {
//     gulp.src(['./src/scss/**/*.scss', '!./src/scss/**/_*.scss'])
//     // エラーしても処理を止めない。エラーが発生した場合はデスクトップ通知を行う。
//     .pipe(plumber({
//       errorHandler: notify.onError("Error: <%= error.message %>")
//     }))
//     // 開発環境でのみソースマップを作成
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         sourcemaps.init()
//       )
//     )
//     // 開発環境でのみcssを最小化
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         sass({ outputStyle: 'expanded' }),
//         sass({ outputStyle: 'compressed' })
//       )
//     )
//     .pipe(prefix({
//       browsers: ['last 2 version', 'iOS >= 8', 'Android >= 4.1'],
//       cascade: false,
//       grid: true
//     }))
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         sourcemaps.write('./')
//       )
//     )
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         gulp.dest('./' + paths.develop + '/' + Assets + '/css/'),
//         gulp.dest('./' + paths.production + '/' + Assets + '/css/')
//       )
//     )
//     // CSSファイルのみリロードする
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         browserSync.stream()
//       )
//     )
//     done();
// });

// // TypeScriptの設定
// gulp.task('ts', function (done) {
//     gulp.src('./src/typescript/**/*.ts')
//     .pipe(ts({
//         target: 'es5',
//         removeComments: true
//     }))
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         gulp.dest('./' + paths.develop + '/' + Assets + '/js/'),
//         gulp.dest('./' + paths.production + '/' + Assets + '/js/')
//       )
//     )
//     // jsファイルのみリロードする
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         browserSync.stream()
//       )
//     )
//     done();
// });

// // EJSの設定
// gulp.task('ejs', function (done) {
//     const json = JSON.parse(fs.readFileSync('./src/json/data.json'));
//     gulp.src(['./src/html/**/*.ejs', '!./src/html/**/_*.ejs'])
//     // 出力時の拡張子をhtmlにする
//     .pipe(ejs({json}))
//     .pipe(rename({extname: '.html'}))
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         gulp.dest('./' + paths.develop + '/'),
//         gulp.dest('./' + paths.production + '/')
//       )
//     )
//     .pipe(
//       gulpIf(
//         env == 'develop',
//         browserSync.stream()
//       )
//     )
//     done();
// });



// gulp.task('watch', () => {
//   gulp.watch(['./src/scss/**/*.scss'], gulp.task('sass'));
//   gulp.watch(['./src/typescript/**/*.ts'], gulp.task('ts'));
//   gulp.watch(['./src/html/**/*.ejs'], gulp.task('ejs'));
//   gulp.watch(['./' + Build + '/**/*.html'], gulp.task('reload'));
// });

// gulp.task('default', gulp.series(
//     gulpIf(
//       env == 'develop',
//       gulp.parallel('sass', 'ejs', 'sync', 'ts', 'reload', 'watch', 'spritesmith', 'imagemin'),
//       gulp.parallel('sass', 'ejs', 'ts', 'spritesmith', 'imagemin')
//     )
// ));






