<template>
  <!-- Header Start -->
  <header class="nl__header-one nl-bg-color-gray-100">
    <div
      class="nl__main-header d-flex align-items-center justify-content-xl-start justify-content-between p-3 p-xl-0"
    >
      <div class="nl__header-one-logo">
        <a href="index.html">
          <img src="/images/logo-black.svg" alt="" />
        </a>
      </div>
      <div
        class="nl__nav-and-social d-flex justify-content-between align-items-center d-none d-xl-flex"
      >
        <nav class="nl-navmenu text-center ul-li d-none d-lg-block">
          <ul>
            <!-- <li class="has-submenu">
                                <a href="javascript:void(0)">Home</a>
                                <ul class="submenu-wrapper submenu-wrapperv1">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index2.html">Home 2</a></li>
                                </ul>
                            </li> -->
            <li><nuxt-link to="/">Home</nuxt-link></li>

            <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
            <li><nuxt-link to="/residential">ss</nuxt-link></li>
            <li class="has-submenu">
              <a href="javascript:void(0)">Project</a>
              <ul class="submenu-wrapper submenu-wrapperv1">
                <li><a href="project.html">Projects</a></li>
                <li>
                  <a href="project-details.html">Project Details</a>
                </li>
              </ul>
            </li>
            <li class="has-submenu">
              <a href="javascript:void(0)">Services</a>
              <ul class="submenu-wrapper submenu-wrapperv1">
                <li><a href="service.html">Services</a></li>
                <li>
                  <a href="service-details.html">Service Details</a>
                </li>
              </ul>
            </li>
            <li class="has-submenu">
              <a href="javascript:void(0)">Pages</a>
              <ul class="submenu-wrapper submenu-wrapperv1">
                <li><a href="faq.html">Faq</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </li>
            <li class="has-submenu">
              <a href="javascript:void(0)">Blog</a>
              <ul class="submenu-wrapper submenu-wrapperv1">
                <li><a href="blog.html">Blog List</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="nl__header-social-item">
          <a href="#"
            ><i class="nl-icon nl-icon-facebook nl-color-black"></i
          ></a>
          <a href="#"
            ><i class="nl-icon nl-icon-instagram nl-color-black"></i
          ></a>
          <a href="#"
            ><i class="nl-icon nl-icon-x-twitter nl-color-black"></i
          ></a>
          <a href="#"
            ><i class="nl-icon nl-icon-linkedin nl-color-black"></i
          ></a>
        </div>
      </div>
      <div
        class="nl__header-contact-info d-flex align-items-center pl-30 ml-30 pt-20 pb-20 d-none d-xl-flex"
      >
        <div class="nl__header-icon">
          <a href="tel:8085550111">
            <i class="nl-icon nl-icon-call"></i>
          </a>
        </div>
        <div class="nl__header-number">
          <h5 class="nl-fs-18 nl-lh-30 text-white">Need Help?</h5>
          <a href="tel:8085550111" class="nl-fs-18 nl-lh-24 text-white">{{
            site.phone_number1
          }}</a>
        </div>
      </div>
      <button type="button" class="header-toggle mobile-menu-toggle d-xl-none">
        <span class="offcanvas_border_one"></span>
        <span></span>
      </button>
    </div>

    <!--mobile menu start-->
    <div class="mobile-menu ul-li">
      <a href="javascript:void(0)" class="close"
        ><i class="isax icon-close-circle1"></i
      ></a>
      <a href="index.html" class="logo"
        ><img src="/images/logov2.svg" alt="logo" class="img-fluid"
      /></a>
      <ul class="mobile-nav-menu">
        <li class="has-submenu">
          <a href="javascript:void(0)">Home</a>
          <i class="isax icon-arrow-down1"></i>
          <ul class="submenu-wrapper">
            <li><a href="index.html">Home 1</a></li>
            <li><a href="index2.html">Home 2</a></li>
          </ul>
        </li>
        <li><a href="about.html">About</a></li>
        <li class="has-submenu">
          <a href="project.html">Project</a>
          <i class="isax icon-arrow-down1"></i>
          <ul class="submenu-wrapper">
            <li><a href="project.html">Projects</a></li>
            <li><a href="project-details.html">Project Details</a></li>
          </ul>
        </li>
        <li class="has-submenu">
          <a href="Service.html">Services</a>
          <i class="isax icon-arrow-down1"></i>
          <ul class="submenu-wrapper">
            <li><a href="Service.html">Services</a></li>
            <li><a href="service-details.html">Service Details</a></li>
          </ul>
        </li>
        <li class="has-submenu">
          <a href="javascript:void(0)">Pages</a>
          <i class="isax icon-arrow-down1"></i>
          <ul class="submenu-wrapper">
            <li><a href="Faq.html">Faq</a></li>
          </ul>
        </li>
        <li class="has-submenu">
          <a href="javascript:void(0)">Blog</a>
          <i class="isax icon-arrow-down1"></i>
          <ul class="submenu-wrapper">
            <li><a href="blog.html">Blog List</a></li>
            <li><a href="blog-details.html">Blog Details</a></li>
          </ul>
        </li>
        <li><a href="Contact.html">Contact</a></li>
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
