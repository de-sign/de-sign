const imagemin = require('gulp-imagemin')

// Data
let env = process.env.NODE_ENV || 'development',
    out = {
        development: 'build',
        testing: 'test',
        production: 'dist'
    },
    src = {
        root: 'src',
        assets: 'src/assets'
    },
    dest = {
        root: `${out[env]}`,
        assets: `${out[env]}/assets`
    };

// Export
Object.assign(exports, {
    
    env: {
        current: env,
        isDevelopment: env == 'development',
        isTesting: env == 'testing',
        isProduction: env == 'production'
    },

    paths: {
        src: Object.assign(src, {
            html: `${src.root}`,
            scss: `${src.assets}/scss`,
            js: `${src.assets}/js`,
            images: `${src.assets}/images`,
            fonts: `${src.assets}/fonts`
        }),
        dest: Object.assign(dest, {
            html: `${dest.root}`,
            scss: `${dest.assets}/css`,
            js: `${dest.assets}/js`,
            images: `${dest.assets}/images`,
            fonts: `${dest.assets}/fonts`
        })
    },

    files: {
        watch: {
            html: [
                '**/*.html',
                '**/*.json'
            ],
            scss: '**/*.scss',
            js: '**/*.js',
            images: '**/*.*',
            fonts: '**/*.*'
        },
        src: {
            html: '*.html',
            scss: 'main.scss',
            js: '**/*.js',
            images: '**/*.*',
            fonts: '**/*.*'
        },
        dest: {
            js: 'main.js',
            scss: 'main.css'
        }
    },

    plugins: {
        browserSync: {
            server: dest.root,
            watch: true
        },
        plumber: undefined,
        sourcemaps: {
            js: {
                init: undefined,
                write: undefined
            },
            css: {
                init: undefined,
                write: undefined
            }
        },
        beautify: {
            js: undefined,
            html: undefined,
            css: undefined
        },
        uglify: undefined,
        sass: undefined,
        cleanCss: undefined,
        imagemin: [
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeComments: true },
                    { removeHiddenElems: true },
                    { removeDimensions: true },
                    { cleanupIDs: true }
                ]
            })
        ]
    }
});