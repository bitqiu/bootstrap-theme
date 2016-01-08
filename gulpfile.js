var gulp = require('gulp');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

// font-family: PingFang SC, Hiragino Sans GB, Microsoft Yahei, sans-serif;
var paths = {
    bower: 'bower_components/',
    assets: 'www/assets/',
    src: 'src/',
    dist: 'dist/'
};

// 语法检查
gulp.task('jshint', function () {
    return gulp.src(paths.src+'js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// less
gulp.task('less',function(){
    gulp.src(paths.src+'less/bootstrap.less')
        .pipe(less({
            paths: [paths.bower+'/bootstrap/less/', paths.src+'less/']
        }))
        .pipe(rename({
            basename: 'bootstrap'
        }))
        .pipe(gulp.dest(paths.src+'css/'));
});

// style
gulp.task('style',function(){
    gulp.src(paths.src+'less/style.less')
        .pipe(less({
            paths: [paths.src+'less/']
        }))
        .pipe(rename({
            basename: 'style'
        }))
        .pipe(gulp.dest(paths.src+'css/'));
});

// js
gulp.task('script', function() {
    gulp.src(paths.src+'js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest(paths.assets+'js/'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.assets+'js/'));
});

// dist
gulp.task('copy', function () {
    // bower
    gulp.src([paths.bower+'bootstrap/fonts/*',paths.bower+'font-awesome/fonts/*'])
        .pipe(gulp.dest(paths.src+'fonts/'));
    // fonts
    gulp.src(paths.src+'fonts/*')
        .pipe(gulp.dest(paths.assets+'fonts/'));
    // css
    gulp.src(paths.src+'css/*.css')
        .pipe(gulp.dest(paths.assets+'css/'));
    // img
    gulp.src(paths.src+'img/*')
        .pipe(gulp.dest(paths.assets+'img/'));
});

// clean
gulp.task('clean',function(){
    gulp.src([paths.assets+'css/*', paths.assets+'js/*', paths.assets+'img/*'], {read: false})
        .pipe(clean({force: true}));
});

// watch
gulp.task('watch',function(){
    gulp.watch(paths.src+'less/**.less',['less', 'style']);
    gulp.watch(paths.src+'js/**.js',['jshint','script']);
});

// default
gulp.task('default',['jshint', 'less', 'style', 'copy']);

// build
gulp.task('dist',function(){
    // fonts
    gulp.src(paths.assets+'fonts/*')
        .pipe(gulp.dest(paths.dist+'fonts/'));
    // css
    gulp.src(paths.assets+'css/*.css')
        .pipe(gulp.dest(paths.dist+'css/'));
    // js
    gulp.src(paths.assets+'js/*.js')
        .pipe(gulp.dest(paths.dist+'js/'));
    // img
    gulp.src(paths.assets+'img/*')
        .pipe(gulp.dest(paths.dist+'img/'));
});
