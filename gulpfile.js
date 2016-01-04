var gulp = require('gulp');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var useref = require('gulp-useref');
var watch = require('gulp-watch');
var less = require('gulp-less');

// font-family: PingFang SC, Hiragino Sans GB, Microsoft Yahei, sans-serif;
var paths = {
    assets: {
        css: 'www/assets/css/',
        js: 'www/assets/js/',
        img: 'www/assets/img/',
        fonts: 'www/assets/fonts/'
    },
    src: {
        less: 'src/less/',
        css: 'src/css/',
        js: 'src/js/',
        img: 'src/img/',
        fonts: 'src/fonts/',
    }
};

// less
gulp.task('less',function(){
    gulp
        .src(paths.src.less+'bootstrap.less')
        .pipe(less({
            paths: ['bower_components/bootstrap/less/', paths.src.less]
        }))
        .pipe(rename({
            basename: 'bootstrap'
        }))
        .pipe(gulp.dest(paths.src.css));
});


// style
gulp.task('style',function(){
    gulp
        .src(paths.src.less+'style.less')
        .pipe(less({
            paths: [paths.src.less]
        }))
        .pipe(rename({
            basename: 'style'
        }))
        .pipe(gulp.dest(paths.src.css));
});

// 复制文件
gulp.task('copy', function () {
    gulp.src('src/fonts/*')
        // 目标地址
        .pipe(gulp.dest('www/fonts/'))
    gulp.src('www/img/*')
        // 目标地址
        .pipe(gulp.dest('www/img/'))
});


// dist
gulp.task('dist',function(){


});

// default
gulp.task('default',['less','copy']);
