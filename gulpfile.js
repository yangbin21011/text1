var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var cssnano = require('gulp-cssnano')
var htmlmin = require('gulp-htmlmin')
gulp.task('test', function() {
    console.log(123)
})

gulp.task('script', function() {
    // 1.要匹配到要处理的文件
    // 指定指定的文件:参数是匹配的规则
    // 参数也可以是数组，数组中的元素就是匹配的规则
    gulp.src(['./bijia.js', './coupon.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task('style', function() {
    gulp.src(['./*.css'])
        .pipe(concat('index.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./css'))
})

gulp.task('html', function() {
    gulp.src('./brand.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./html'))
})

gulp.task('mywatch', function() {
    gulp.run('script')
    gulp.watch(['bijia.js', 'coupon.js'], ['script'])
})
