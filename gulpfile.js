var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', defaultTask);

function defaultTask(done) {
    // place code for your default task here
    done();
}

gulp.task('minify-css', function (done) {
    return gulp.src('src/css/*.css')

    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))

    .pipe(gulp.dest('dist/css/'))

    done();
})