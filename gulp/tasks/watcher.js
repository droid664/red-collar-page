import gulpWatch from 'gulp-watch'

import { PATHS } from '../config/paths.js'
import html from './html.js'
import images from './images.js'
import scripts from './scripts.js'
import styles from './styles.js'

export default function watcher() {
    gulpWatch(PATHS.watch.nunj, html)
    gulpWatch(PATHS.watch.images, images)
    gulpWatch(PATHS.watch.styles, styles)
    gulpWatch(PATHS.watch.scripts, scripts)
}
