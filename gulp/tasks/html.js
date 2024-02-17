import gulp from 'gulp'
import nunjucksRender from 'gulp-nunjucks-api'
import { readFileSync } from 'fs'
import { PATHS } from '../config/paths.js'
import mode from '../config/mode.js'
import gulpIf from 'gulp-if'
import htmlmin from 'gulp-htmlmin'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

export default function html() {
    const data = readFileSync('./data.json', 'utf-8')
    const dataJSON = JSON.parse(data)
    const isProduction = mode() === 'production'

    return gulp
        .src(PATHS.src.nunj)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(
            nunjucksRender({
                src: './src/',
                data: Object.assign({}, dataJSON),
                trimBlocks: true,
                lstripBlocks: true,
                autoescape: false,
            }),
        )
        .pipe(gulpIf(isProduction, htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest(PATHS.dist.html))
        .pipe(browserSync.stream())
}
