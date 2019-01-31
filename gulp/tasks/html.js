'use strict';

// プラグイン読み込み
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

gulp.task('ejs', function() {
    gulp.src(
        ['src/html/**/*.ejs','!' + 'src/html/**/_*.ejs']
    )
    .pipe(ejs())
    .pipe(rename({extname: '.html'})) 
    .pipe(gulp.dest("build/html/"))
});