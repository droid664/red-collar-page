import gulp from 'gulp'
import FtpConnection from 'vinyl-ftp'
import path from 'path'

export default function deploy() {
    const connect = FtpConnection.create({
        host: '51.250.126.80',
        user: 'hashex_makeup_ftp',
        password: 'GCIaK)Pbp6^R',
    })

    const nameProject = path.basename(process.cwd())
    return gulp.src('dist/**/*.*').pipe(connect.dest(`/${nameProject}`))
}
