// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      baseURL: process.env.API_BASE_URL,
    },
  },
  app: {
    head: {
      title: "Maniraj",
      meta: [{ name: "description", content: "Selling E-bikes." }],
      link: [
        // {
        //   rel : "icon",
        //   href: "/img/favicon-new.png",
        //   type : "image/png"
        // },
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
          href: "/css/odometer-theme-default.css",
        },
        {
          rel: "stylesheet",
          href: "/css/responsive.css",
        },
        {
          rel: "stylesheet",
          href: "/css/style.css",
        },
        {
          rel: "stylesheet",
          href: "/css/swiper-bundle.min.css",
        },
      ],
      script: [
        {
          src: "/js/jquery.js", defer:true, async: true,
        },
        {
          src: "/js/bootstrap.bundle.min.js", defer:true, async: true,
        },
        {
          src: "/js/lity.min.js", defer:true, async: true,
        },
        {
          src: "/js/gsap.min.js", defer:true, async: true,
        },
        {
          src: "/js/locomotive-scroll.min.js", defer:true, async: true,
        },
        {
          src: "/js/ScrollTrigger.min.js", defer:true, async: true,
        },
        {
          src: "/js/SplitText.min.js", defer:true, async: true,
        },
        {
          src: "/js/marquee.min.js", defer:true, async: true,
        },
        {
          src: "/js/swiper-bundle.min.js", defer:true, async: true,
        },
        {
          src: "/js/appear.js", defer:true, async: true,
        },
        {
          src: "/js/odometer.min.js", defer:true, async: true,
        },
        {
          src: "/js/count.js", defer:true, async: true,
        },
        {
          src: "/js/ScrollToPlugin.min.js", defer:true, async: true,
        },
        { 
          src: "/js/script.js", defer:true, async: true,
        },
        { 
          // src: "/js/ThemeAnim.js", defer:true, async: true,
        },
      ],
    },
  },
});
