import gulp from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import cssmin from 'gulp-cssmin'
import mode from '../config/mode.js'
import { PATHS } from '../config/paths.js'
import gulpIf from 'gulp-if'
import rename from 'gulp-rename'
import { hash } from '../config/hash.js'
import browserSync from 'browser-sync'

const sass = gulpSass(dartSass)

export default function styles() {
    const isProduction = mode() === 'production'

    const hashName = hash()

    return gulp
        .src(PATHS.src.styles)
        .pipe(
            sass({
                outputStyle: 'expanded',
            }).on('error', sass.logError),
        )
        .pipe(groupCssMediaQueries())
        .pipe(
            autoprefixer({
                cascade: true,
                grid: true,
                overrideBrowserslist: ['last 5 versions'],
            }),
        )
        .pipe(gulpIf(isProduction, cssmin()))
        .pipe(gulp.dest(PATHS.dist.styles))
        .pipe(browserSync.stream())
}
