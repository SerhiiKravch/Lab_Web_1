var gulp = require ("gulp");

var sass = require ("gulp-sass")(require('sass')),
cssnano = require ("gulp-cssnano"), 
uglify = require ("gulp-uglify"),
imagemin = require ("gulp-imagemin"),
autoprefixer = require ('gulp-autoprefixer'), 
concat = require ("gulp-concat"), 
rename = require ("gulp-rename"); 
babel = require("gulp-babel");

gulp.task ( "html", function () {
    return gulp.src ( "app/*.html")
    .pipe (gulp.dest ( "dist/"));
 });

 gulp.task ( "sass", function () {
    return gulp.src ( "app/sass/*.sass") .pipe (concat( 'styles.sass')) .pipe (sass ())
        .pipe (autoprefixer ({
        browsers: [ 'last 2 versions'],
            cascade: false
        }))
        .pipe (cssnano ())
        .pipe (rename ({suffix: '.min'}))
        .pipe (gulp.dest ( "dist/css/"));
 });

 gulp.task ( "scripts", function () {
    return gulp.src ( "app/js/*.js") 
        .pipe (concat ( 'scripts.js'))
        .pipe (uglify ()) 
        .pipe (rename ({suffix: '.min'})) 
        .pipe (gulp.dest ( "dist/js/"));
 });

 gulp.task ( 'imgs', function () {
    return gulp.src ( "app/img/*.psd") 
        .pipe (imagemin ({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                 interlaced: true
                }))
    .pipe (gulp.dest ( "dist/images/"))
            });
    
gulp.task ( "watch", function () {
    gulp.watch ( "src / *. html", gulp.series ("html"));
    gulp.watch ( "src / js / *. js", gulp.series ("scripts"));
    gulp.watch ( "src / sass / *. sass", gulp.series ("sass"));
    gulp.watch ( "src / images /*.+ (jpg | jpeg | png | gif)", gulp.series ("imgs"));
});

gulp.task ("default", gulp.series('html', 'sass', 'scripts', 'imgs', 'watch'));
                