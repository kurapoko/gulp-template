'use strict';

// プラグインの読み込み
const fs =require('fs');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

gulp.task('ejs', function() {
	var json = JSON.parse(fs.readFileSync('./src/json/pages.json')); 
    gulp.src(['./src/html/**/*.ejs', '!./src/html/**/_*.ejs'])
        .pipe(ejs({json:json}))
		.pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./build/html/'));
});