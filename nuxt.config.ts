// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      baseURL: process.env.API_BASE_URL,
    },
  },
  app: {
    head: {
      title: "Maniraj Properties",
      meta: [{ name: "description", content: "Selling Properties." }],
      link: [
         {
           rel : "icon",
           href: "/images/Maniraj-i.png",
           type : "image/png"
         },
        {
          rel: "stylesheet",
          href: "/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "/css/iconsax-style.css",
        },
        {
          rel: "stylesheet",
          href: "/css/iconly.css",
        },
        {
          rel: "stylesheet",
          href: "/css/lity.min.css",
        },
        {
          rel: "stylesheet",
          href: "/css/swiper-bundle.min.css",
        },
        {
          rel: "stylesheet",
          href: "/css/odometer-theme-default.css",
        },
        {
          rel: "stylesheet",
          href: "/css/style.css",
        },
        {
          rel: "stylesheet",
          href: "/css/responsive.css",
        },
        
        
      ],
      // script: [
      //   {
      //     src: "/js/jquery.js",
      //   },
      //   {
      //     src: "/js/bootstrap.bundle.min.js",
      //   },
      //   {
      //     src: "/js/lity.min.js",
      //   },
      //   {
      //     src: "/js/gsap.min.js",
      //   },
      //   {
      //     src: "/js/locomotive-scroll.min.js",
      //   },
      //   {
      //     src: "/js/ScrollTrigger.min.js",
      //   },
      //   {
      //     src: "/js/SplitText.min.js",
      //   },
      //   {
      //     src: "/js/marquee.min.js",
      //   },
      //   {
      //     src: "/js/swiper-bundle.min.js",
      //   },
      //   {
      //     src: "/js/appear.js",
      //   },
      //   {
      //     src: "/js/odometer.min.js",
      //   },
      //   {
      //     src: "/js/count.js",
      //   },
      //   {
      //     src: "/js/ScrollToPlugin.min.js",
      //   },
      //   { 
      //     src: "/js/script.js", defer:true,
      //   },
      //   { 
      //     // src: "/js/ThemeAnim.js",
      //   },
      // ],
    },
  },
});
