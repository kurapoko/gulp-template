'use strict';

// 初期設定
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function() {
    // .scssファイルを監視
    return gulp.watch('src/scss/**/*.scss', function() {
        return gulp.src('src/scss/style.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        })
        // Sassのコンパイルエラーを表示
        .on('error', sass.logError))
        .pipe(gulp.dest('build/assets/css/'));
    });
});