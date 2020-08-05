const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const browsync = require('browser-sync').create()

gulp.task('sass', function(){
    return gulp.src(['dev/scss/**/*.scss'])
      .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
      .pipe(gulp.dest('public/css/'))
      .pipe(browsync.stream())
      });

gulp.task('fontawesome', function(){
    return gulp.src('node_modules/font-awesome/scss/font-awesome.scss')
    .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
      .pipe(gulp.dest('public/css/'))
      .pipe(browsync.stream())
      });
gulp.task('font', function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'));
});
gulp.task('pug', function(){
    return gulp.src('dev/**.pug')
        .pipe(pug())
        .pipe(gulp.dest('public/'))
});

gulp.task('default', function(){
    gulp.watch('dev/**/*.pug', gulp.series('pug'))
    gulp.watch('dev/scss/**/*.scss', gulp.series('sass'))
    gulp.watch('public/**/*.html',) .on('change',  browsync.reload)
    browsync.init({
        server:{
            baseDir: './public'
        }
    })
})