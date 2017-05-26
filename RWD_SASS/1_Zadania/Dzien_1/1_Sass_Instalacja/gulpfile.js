var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError)) // taki zapis plus linia 8, dają nam to, że watch nie przestanie działać, kiedy wyskoczy błąd.
    .pipe(sass()) // bez średników bo to jest w jednej linii, tyle, że lepiej widać.
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);

})
