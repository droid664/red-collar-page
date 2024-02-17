import gulp from 'gulp'
import webpack from 'webpack-stream'
import { PATHS } from '../config/paths.js'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

export default function scripts() {
    return gulp
        .src(PATHS.src.scripts)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(
            webpack({
                mode: 'production',
                output: {
                    filename: `app.js`,
                    libraryTarget: 'umd',
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env'],
                                },
                            },
                        },
                    ],
                },
            }),
        )
        .pipe(gulp.dest(PATHS.dist.scripts))
        .pipe(browserSync.stream())
}
