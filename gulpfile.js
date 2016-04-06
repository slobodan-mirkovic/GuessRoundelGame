'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rimraf = require("rimraf"),
    cssmin = require("gulp-cssmin");


gulp.task("clean:js", function (cb) {
    rimraf('js/app.min.js', cb);
});

gulp.task("clean:css", function (cb) {
    rimraf('css/app.min.css', cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([
        'js/roundels.js',
        'js/game.js',
        'js/main.js'])
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("js"));
});

gulp.task("min:css", function () {
    return gulp.src([
        'css/normalze.css',
        'css/main.css'])
        .pipe(concat("app.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest("css"));
});

gulp.task("min", ["min:js", "min:css"]);

