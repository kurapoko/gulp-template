// EJSの設定
// 初期設定(プラグインの読み込み)
const {src, dest, task } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync');
const { srcDir, destDir } = require('../config');


const script = (done) => {
  src(`${srcDir.script}/**/*.js`)
  .pipe(
    webpack({
      mode: "development",
      watch: "development",
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: 'babel-loader',
              }
            ]
          }
        ]
      },
    })
  )
  .pipe(dest(destDir.script))
  .pipe(browserSync.stream());
  done();
}

task(script);

module.exports = script;