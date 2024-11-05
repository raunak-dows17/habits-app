// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  app: {
    head: {
      title: "Habits",
      meta: [
        {
          name: "description",
          content: "Add and maintain habits",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
