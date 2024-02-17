import gulp from 'gulp'
import { PATHS } from '../config/paths.js'
import newer from 'gulp-newer'
import browserSync from 'browser-sync'

export default function fonts() {
    return gulp
        .src(PATHS.src.fonts)
        .pipe(newer(PATHS.dist.fonts))
        .pipe(gulp.dest(PATHS.dist.fonts))
        .pipe(browserSync.stream())
}
