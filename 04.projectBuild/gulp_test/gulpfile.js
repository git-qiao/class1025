/*
  gulpfile.js是gulp的配置文件
 */
//引入gulp模块
const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require("gulp-rename");
/*
  流程：
    1. gulp官网找插件 https://gulpjs.com/plugins/  gulp-插件名称
    2. 下载插件 npm i xxx -D
    3. 引入插件 const xxx = require("gulp-xxx");
    4. 配置插件任务 gulp.task('name', function () {})
    5. 运行插件任务 gulp 任务名称
 */

//注册任务

gulp.task('babel', function () {
  //当前任务要执行的回调函数
  return gulp.src('src/js/*.js')      //将要处理的js文件引入进来
    .pipe(babel({   //将引入进来的文件，通过babel插件做语法转换（es6语法转化es5）
      presets: ['@babel/env']  //babel只能将es6模块化语法转换为commonjs语法
    }))
    .pipe(gulp.dest('build/js'))  //输出到指定目录去
})

gulp.task('browserify', function() {
  return gulp.src('build/js/app.js')
    .pipe(browserify())  //将commonjs语法转换成浏览器能识别的语法
    .pipe(rename('built.js'))
    .pipe(gulp.dest('./build/js'))
});