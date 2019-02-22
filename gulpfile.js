'use strict';

// �����ݒ�
const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix  = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

// SASS�̐ݒ�
gulp.task('sass', function(done) {
    gulp.src('./src/scss/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(prefix({
      browsers: ['last 2 version', 'iOS >= 8', 'Android >= 4.1'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/assets/css/'))
    done();
});

// Browser-syng�̐ݒ�
// �u���E�U��ʂւ̒ʒm�𖳌���
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
  gulp.watch(['dist/**/*'], gulp.task('reload'));
});

gulp.task('default', gulp.series( gulp.parallel('sass','sync', 'reload', 'watch')));