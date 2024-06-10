<template>
  <!-- Header Start -->
  <header class="nl__header-one nl-bg-color-gray-100">
    <div
      class="nl__main-header d-flex align-items-center justify-content-xl-start justify-content-between p-3 p-xl-0"
    >
      <div class="nl__header-one-logo">
        <a href="/">
          <img
            v-if="site.logo"
            :src="site.logo"
            alt=""
            height="100"
            width="100"
            style="border-radius: 50px"
          />
          <img
            v-else
            src="/images/Maniraj-logo.jpg"
            alt=""
            height="100"
            width="100"
            style="border-radius: 50px"
          />
        </a>
      </div>
      <div
        class="nl__nav-and-social d-flex justify-content-between align-items-center d-none d-xl-flex"
      >
        <nav class="nl-navmenu text-center ul-li d-none d-lg-block">
          <ul>
            <li><a href="/">Home</a></li>

            <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
            <li class="has-submenu">
              <a href="javascript:void(0)">Our Property</a>
              <ul class="submenu-wrapper submenu-wrapperv1">
                <li><nuxtLink to="/residential">Residential</nuxtLink></li>
                <li><nuxtLink to="/commercial">Commercial</nuxtLink></li>
                <li><nuxtLink to="/plot">Plot</nuxtLink></li>
              </ul>
            </li>
            <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
            <li><nuxt-link to="/ourTeam">Our Team</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
          </ul>
        </nav>

        <div class="nl__header-social-item">
          <a
            v-if="site.facebook_link"
            :href="site.facebook_link"
            target="_blank"
            ><i class="nl-icon nl-icon-facebook nl-color-black"></i
          ></a>
          <a
            v-if="site.instagram_link"
            :href="site.instagram_link"
            target="_blank"
            ><i class="nl-icon nl-icon-instagram nl-color-black"></i
          ></a>
          <a v-if="site.whatsapp_number" :href="whatsappLink"
            ><i class="nl-icon nl-icon-chat-group nl-color-black nl-fs-20"></i
          ></a>
          <!--<a href="#"
            ><i class="nl-icon nl-icon-linkedin nl-color-black"></i
          ></a> -->
        </div>
      </div>
      <div
        class="nl__header-contact-info d-flex align-items-center pl-30 ml-30 pt-20 pb-20 d-none d-xl-flex"
      >
        <div class="nl__header-icon">
          <a :href="'tel:' + site.phone_number1">
            <i class="nl-icon nl-icon-call"></i>
          </a>
        </div>
        <div class="nl__header-number" v-if="site.phone_number1">
          <h5 class="nl-fs-16 nl-lh-30 text-white">Need Help?</h5>
          <a
            :href="'tel:' + site.phone_number1"
            class="nl-fs-16 nl-lh-24 text-white"
            >+91 {{ site.phone_number1 }}</a
          >
        </div>
      </div>
      <button
        type="button"
        class="header-toggle mobile-menu-toggle d-xl-none"
        @click="event()"
      >
        <span class="offcanvas_border_one"></span>
        <span></span>
      </button>
    </div>

    <!--mobile menu start-->
    <div class="mobile-menu ul-li" :class="open ? 'active' : ''">
      <a @click="event()" class="close"
        ><i class="isax icon-close-circle1"></i
      ></a>
      <!-- <a href="index.html" class="logo"
        ><img src="/images/logov2.svg" alt="logo" class="img-fluid"
      /></a> -->
      <a href="/" class="logo">
        <img
          v-if="site.logo"
          :src="site.logo"
          alt=""
          height="100"
          width="100"
          style="border-radius: 50px"
        />
        <img
          v-else
          src="/images/Maniraj-logo.jpg"
          alt=""
          height="100"
          width="100"
          style="border-radius: 50px"
        />
      </a>
      <ul class="mobile-nav-menu">
        <li><a href="/">Home</a></li>

        <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
        <li><nuxtLink to="/residential">Residential</nuxtLink></li>
        <li><nuxtLink to="/commercial">Commercial</nuxtLink></li>
        <li><nuxtLink to="/plot">Plot</nuxtLink></li>
        <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
        <li><nuxt-link to="/ourTeam">Our Team</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
      </ul>
    </div>
    <!--mobile menu end-->
  </header>
  <!-- Header End -->
</template>

<!-- <script lang="ts" setup>
export default {
  data() {
    return {
      site: {},
    };
  },
};
</script> -->
<script>
export default {
  data() {
    return {
      site: {},
      open: false,
    };
  },
  watch: {
    $route() {
      this.open = false;
    },
  },
  created() {
    this.fetchDataSite();
  },
  computed: {
    // Computed property to generate the WhatsApp link
    whatsappLink() {
      const baseUrl = "https://api.whatsapp.com/send";
      return `${baseUrl}?phone=${this.site.whatsapp_number}`;
    },
  },
  methods: {
    event() {
      this.open = this.open ? false : true;
    },
    fetchDataSite() {
      api()
        .get("user-side/site-setting-show")
        .then((res) => {
          if (res.data.success) {
            this.site = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
