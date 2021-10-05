export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TestAuth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      } */
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/auth-next',
  ],
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://127.0.0.1:8000"  // here set your API url
    // proxy: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          type: "JWT" // 'Bearer'
        },
        user: {
          property: 'data.user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/token/', method: 'post' },
          logout: false, // { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user/', method: 'get' }
        }
      }
    },
  },
  /* router: {
    middleware: ['auth']
  }, */
}
