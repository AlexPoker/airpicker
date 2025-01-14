var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer')({ browsers: ['last 2 versions'] }),
    clone = require('gulp-clone'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat');

module.exports = function () {
    var stream = gulp.src('src/sass/*.scss')
        .pipe(concat('airpicker.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]));

    stream.pipe(clone())
        .pipe(minify())
        .pipe(rename('airpicker.min.css'))
        .pipe(gulp.dest('dist/css'));

    stream.pipe(clone())
        .pipe(rename('airpicker.css'))
        .pipe(gulp.dest('dist/css'))
};