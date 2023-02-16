

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  ssr: true,
  telemetry: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover', 
      // title: process.env.APP_TITLE,
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' },
        
        // { hid: 'keywords', name: 'keywords', content: process.env.APP_KEYWORDS},
        
        { name: 'revisit-after', content: '1 day' },

        // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'Content-Type', content:'text/html; charset=utf-8' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'},
        { name: 'SKYPE_TOOLBAR', content: 'SKYPE_TOOLBAR_PARSER_COMPATIBLE'},
        { name: 'msapplication-TileImage', content: '/icon.png' },
        

        // { hid: 'og:locale', name: 'og:locale', property: "og:locale", content: process.env.APP_LANG},
        // { hid: 'og:title', name: 'og:title', property: "og:title", content: process.env.APP_TITLE},
        { hid: 'og:type', name: 'og:type', property: "og:type", content: 'website'},
        // { hid: 'og:url', name: 'og:url', property: "og:url", content: process.env.APP_URL},
        // { hid: 'og:description', name: 'og:description', property: "og:description", content: process.env.APP_DESC},
        // { hid: 'og:image', name: 'og:image', property: "og:image", content: process.env.APP_IMAGE}, // make sure this is the last step
        // { hid: 'og:image:secure_url', name: 'og:image:secure_url', property: "og:image:secure_url", content: process.env.APP_IMAGE}, // make sure this is the last step

        { hid: 'article:modified_time', name: 'article:modified_time', property: 'article:modified_time', content: '2022-09-18T17:09:32+00:00' },

        { hid: 'twitter:card', name: 'twitter:card', property: "twitter:card", content: "summary_large_image"},
        // { hid: 'twitter:title', name: 'twitter:title', property: "twitter:title", content: process.env.APP_TITLE},
        // { hid: 'twitter:description', name: 'twitter:description', property: "twitter:description", content: process.env.APP_DESC},
        // { hid: 'twitter:image', name: 'twitter:image', property: "twitter:image", content: process.env.APP_IMAGE} // make sure this is the last step
      ],
    }
  },
  nitro: {
    // preset: 'node-server',
    prerender: {
      routes: [
        '/', 
      ]
    }  
  }
})
