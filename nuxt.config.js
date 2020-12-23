import webpack from 'webpack'

export default {

    ssr: false,
    target: 'server',

    components: true,

    //--------------------------------------------------------------------------
    // Headers of the page
    //--------------------------------------------------------------------------
    head: {
        titleTemplate: "KARA : %s",
        htmlAttrs: {
            lang: "fr"
        },
        meta: [
            {
                charset: "utf-8"
            }
        ],
    },


    //--------------------------------------------------------------------------
    // Global css
    //--------------------------------------------------------------------------
    css: [
        '@assets/scss/kara.scss',
        '@assets/css/specific.css',
    ],


    //--------------------------------------------------------------------------
    // Disabling Bootstrap Compiled CSS
    //--------------------------------------------------------------------------
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false
    },


    //--------------------------------------------------------------------------
    // Configuring style resources
    //--------------------------------------------------------------------------
    styleResources: {
        scss: "assets/scss/*.scss"
    },


    //--------------------------------------------------------------------------
    // Nuxt.js modules
    //--------------------------------------------------------------------------
    modules: [
        'bootstrap-vue/nuxt',
        'nuxt-fontawesome',
        "@nuxtjs/style-resources",
        '@nuxtjs/axios',
    ],

    //--------------------------------------------------------------------------
    // Plugins to load before mounting the App
    //--------------------------------------------------------------------------
    plugins: [
        './plugins/vendor/vuemoment.js',
        {src: '~/plugins/vendor/vuex-persist', ssr: false}
    ],


    //--------------------------------------------------------------------------
    // Font awesome configuration
    //--------------------------------------------------------------------------
    fontawesome: {
        imports: [
            {
                set: '@fortawesome/pro-light-svg-icons',
                icons: [
                    'faEye',
                    'faFileUpload',
                    'faPen',
                    'faPlus',
                    'faSave',
                    'faTimes',
                    'faTrashAlt',
                ]
            },
        ]
    },

    //--------------------------------------------------------------------------
    // Plugins
    //--------------------------------------------------------------------------
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                _: 'lodash'
                // ...etc.
            })
        ]
    },

    //--------------------------------------------------------------------------
    // Axios module configuration
    //--------------------------------------------------------------------------
    axios: {
        //DEVELOPMENT
        //------------------------------------------------------------------------
        //baseURL: 'http://tools.kara-expertise.local/api/',

        //PRODUCTION
        //------------------------------------------------------------------------
        baseURL: 'https://tdb.kara-audit.com/api/',
    },
}
