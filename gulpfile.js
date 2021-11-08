var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested');
const { gifsicle } = require('gulp-imagemin');

gulp.task('default', function(){
    console.log('Hurray, gulp task');
})

gulp.task('html', function(){
    console.log('something useful in HTML happenning')
})
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function(){
    watch('./app/index.html', gulp.series('html'));
    watch('./app/assets/styles/**/*.css', gulp.series('styles'))
})
