// Data
let env = 'dev',
    out = {
        dev: 'build',
        test: 'test',
        prod: 'dist'
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
        isDev: env == 'dev',
        isTest: env == 'test',
        isProd: env == 'prod'
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
        
    }
});