'use strict';

// 初期設定
const gulp = require('gulp');
const sass = require('gulp-sass');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const prefix  = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const spritesmith = require('gulp.spritesmith');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// SASSの設定
gulp.task('sass', function(done) {
    gulp.src('./src/scss/style.scss')
    // エラーしても処理を止めない
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(prefix({
      browsers: ['last 2 version', 'iOS >= 8', 'Android >= 4.1'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/assets/css/'))
    done();
});

// EJS
gulp.task('ejs', function(done) {
    gulp.src(['./src/html/**/*.ejs', '!./src/html/**/_*.ejs'])
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('./dist/'))
    done();
});

// CSS-SPRITE
gulp.task('spritesmith', function(done) {
  // スプライトにする画像パス
  const spriteData = gulp.src(['./src/images/sprite/**/*.png'])
  .pipe(spritesmith({
    imgName: 'sprite.png', // 生成するスプライト画像の名前
    cssName: '_sprite.scss',
    imgPath: './dist/assets/images/sprite.png',
    cssFormat: 'scss',
    cssVarMap: function (sprite) {
      sprite.name = 'sprite-' + sprite.name;
    }
  }));
  spriteData.img.pipe(gulp.dest('./dist/assets/images/'));
  spriteData.css.pipe(gulp.dest('./src/scss/parts/'));
  done();
});

//画像圧縮
gulp.task('imagemin', function(done) {
   gulp.src('./src/images/*')
   .pipe(imagemin())
   .pipe(gulp.dest('./dist/assets/images/'))
   done();
});

// Browser-syncの設定
// ブラウザ画面への通知を無効化
gulp.task('sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'index.html'
    },
    open: 'external',
    reloadOnRestart: true
  });
});

gulp.task('reload', function(done) {
  browserSync.reload();
  done();
});

gulp.task('watch', function() {
  gulp.watch(['./src/scss/**/*.scss'], gulp.task('sass'));
  gulp.watch(['./src/html/**/*.ejs'], gulp.task('ejs'));
  gulp.watch(['dist/**/*'], gulp.task('reload'));
});

gulp.task('default', gulp.series( gulp.parallel('sass', 'ejs', 'sync', 'reload', 'watch')));