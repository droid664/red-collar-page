import gulp from 'gulp'

// Импорт задач
import html from './gulp/tasks/html.js'
import styles from './gulp/tasks/styles.js'
import images from './gulp/tasks/images.js'
import scripts from './gulp/tasks/scripts.js'
import clean from './gulp/tasks/clean.js'
import watcher from './gulp/tasks/watcher.js'
import server from './gulp/tasks/server.js'
import fonts from './gulp/tasks/fonts.js'
import zip from './gulp/tasks/zip.js'
import deploy from './gulp/tasks/deploy.js'
import {
    cleanJs,
    cleanManifest,
    cleanStyle,
    revHash,
    revHashReplace,
} from './gulp/tasks/assetsHash.js'

gulp.task('build', gulp.parallel(html, styles, images, scripts, fonts))

gulp.task('hash', gulp.series(revHash, revHashReplace, cleanManifest, cleanJs, cleanStyle))

gulp.task('production', gulp.series(clean, 'build', 'hash'))

gulp.task('zip', gulp.series(clean, 'build', zip))

gulp.task('deploy', gulp.series(clean, 'build', 'hash', deploy))

gulp.task('default', gulp.parallel('build', watcher, server))
