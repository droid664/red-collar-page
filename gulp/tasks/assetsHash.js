import { deleteAsync } from 'del'
import gulp from 'gulp'
import rename from 'gulp-rename'
import { PATHS } from '../config/paths.js'
import { writeFileSync } from 'fs'
import revReplace from 'gulp-rev-replace'
import { hash } from '../config/hash.js'

export function revHash() {
    const jsHash = hash()
    const styleHash = hash()

    const manifest = {
        'app.js': `app.${jsHash}.js`,
        'style.css': `style.${styleHash}.css`,
    }

    writeFileSync('./dist/manifest.json', JSON.stringify(manifest))

    return gulp
        .src('./dist/js/app.js')
        .pipe(rename(manifest['app.js']))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(gulp.src('./dist/assets/css/style.css'))
        .pipe(rename(manifest['style.css']))
        .pipe(gulp.dest('./dist/assets/css'))
}

export function revHashReplace() {
    const manifest = gulp.src('./dist/manifest.json')

    return gulp
        .src(PATHS.dist.html + '*.html')
        .pipe(
            revReplace({
                manifest: manifest,
            }),
        )
        .pipe(gulp.dest('dist'))
}

export function cleanManifest() {
    return deleteAsync(PATHS.dist.html + 'manifest.json')
}
export function cleanJs() {
    return deleteAsync(PATHS.dist.scripts + 'app.js')
}
export function cleanStyle() {
    return deleteAsync(PATHS.dist.styles + 'style.css')
}
