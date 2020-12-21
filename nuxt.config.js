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
        "@nuxtjs/style-resources",
        '@nuxtjs/axios',
    ],

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
