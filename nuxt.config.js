module.exports = {
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/vuetify",
    "@nuxtjs/font-awesome"
  ],
  head: {
    title: "AAHub Home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    script: [{ src: "https://unpkg.com/aa-ui@0.0.5/dist/aa-ui.js" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  build: {
    vendor: ["vuetify"],
    extractCSS: true,
    cssSourceMap: false,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  vuetify: {
    theme: {
      main: "#3B8070",
      primary: "#3B8070",
      twitter: "#00aced",
      facebook: "#265896",
      dark: "#313131",
      lightgray: "#909090",
      primary: "#313131",
      secondary: "#b0bec5",
      accent: "#8c9eff",
      error: "#b71c1c"
    }
  },
  css: [{ src: "~/assets/base.scss", lang: "scss" }]
};
