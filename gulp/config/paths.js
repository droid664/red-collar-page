const PATHS = {
    src: {
        html: 'src/',
        nunj: 'src/pages/**/*.*',
        scripts: 'src/js/app.js',
        styles: 'src/assets/scss/style.scss',
        images: 'src/assets/img/**/*.*{jpg,jpeg,png,gif,svg,ico}',
        fonts: 'src/assets/fonts/**',
        videos: 'src/assets/videos/**',
    },
    dist: {
        html: 'dist/',
        scripts: 'dist/js/',
        styles: 'dist/assets/css/',
        images: 'dist/assets/img/',
        fonts: 'dist/assets/fonts/',
        videos: 'dist/assets/videos/',
    },
    watch: {
        nunj: ['src/**/*.nunj', 'data.json'],
        scripts: 'src/**/*.js',
        styles: 'src/assets/scss/**/*.scss',
        images: 'src/assets/img/**/*.*{jpg,jpeg,png,gif,svg,ico}',
        fonts: 'src/assets/fonts/**/*.*',
        video: 'src/assets/video/**/*.*',
    },
    clean: 'dist',
}

export { PATHS }
