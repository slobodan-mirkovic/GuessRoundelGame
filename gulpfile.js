'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task("concatScripts", function(){
    gulp.src([
        'js/roundels.js',
        'js/game.js',
        'js/main.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('default', ["hello"], function (){
    console.log("This is default task.");
});