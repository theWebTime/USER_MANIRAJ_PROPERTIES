<template>
  <!-- Footer Start End -->
  <section class="nlv2_footer nl-bg-color-black nl-mp nl-malls">
    <div class="nlv2_footer_wrapper">
      <div class="container container-1290">
        <div class="nlv2_footer_wrapper_container">
          <div class="nlv2_footer_top pt-95 pb-100">
            <div class="row">
              <div
                class="col-12 col-lg-12 col-xl-3 col-xxl-3 col-md-6 col-sm-12 nl-mtp"
              >
                <div class="nlv2_footer_top_link nl-mobile-mt">
                  <h4
                    class="nl-fs-22 nl-color-white-opacity nl-lh-24 nl-font-heading pb-30"
                  >
                    Contact
                  </h4>
                  <div class="ps-0 list-unstyled nlv2_footer_list_menu">
                    <p
                      class="nl-fs-18 nl-color-white-opacity nl-lh-30 pb-20 nl-font-body"
                    >
                      RealEstate Realm: Your Pathway to Property Prosperity
                    </p>
                    <div class="nlv2_footer-iconwith">
                      <a
                        v-if="site.email1"
                        :href="'mailto:' + site.email1"
                        target="_blank"
                        class="nl-color-white-opacity d-flex align-content-center pb-20"
                      >
                        <span
                          ><i class="nl-icon nl-icon-envelop nl-fs-14 p-2"></i
                        ></span>
                        <span>{{ site.email1 }}</span></a
                      >
                      <a
                        v-if="site.phone_number2"
                        :href="'tel:' + site.phone_number2"
                        class="nl-color-white-opacity d-flex align-content-center pb-20"
                      >
                        <span
                          ><i class="nl-icon nl-icon-call nl-fs-14 p-2"></i
                        ></span>
                        <span class="">+91 {{ site.phone_number2 }}</span></a
                      >
                    </div>
                    <div
                      class="nlv2_footer-social d-flex nlv2_footer-social gap-4 pt-30"
                    >
                      <span
                        class="nl-fs-18 nl-color-white nl-color-white-opacity"
                        >Follow:
                      </span>
                      <a
                        v-if="site.facebook_link"
                        :href="site.facebook_link"
                        target="_blank"
                        class="nl-color-white-opacity nl-button-hover overflow-hidden"
                        ><span class="nl-button"
                          ><i
                            class="nl-icon nl-icon-facebook nl-fs-16"
                          ></i></span
                      ></a>
                      <!-- <a
                        href="#"
                        class="nl-color-white-opacity nl-button-hover overflow-hidden"
                        ><span class="nl-button"
                          ><i
                            class="nl-icon nl-icon-twitter nl-fs-16"
                          ></i></span
                      ></a> -->
                      <a
                        v-if="site.instagram_link"
                        :href="site.instagram_link"
                        target="_blank"
                        class="nl-color-white-opacity nl-button-hover overflow-hidden"
                        ><span class="nl-button"
                          ><i
                            class="nl-icon nl-icon-instagram nl-fs-16"
                          ></i></span
                      ></a>
                      <!-- <a
                        href="#"
                        class="nl-color-white-opacity nl-button-hover overflow-hidden"
                        ><span class="nl-button"
                          ><i
                            class="nl-icon nl-icon-pinterest nl-fs-16"
                          ></i></span
                      ></a> -->
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-lg-12 col-xl-3 col-xxl-3 col-md-6 col-sm-12 nl-mtp"
              >
                <div class="nl_footer_top_link nl-mobile-mt">
                  <h4
                    class="nl-fs-22 nl-color-white-opacity nl-lh-24 nl-font-heading pb-30"
                  >
                    Our Properties
                  </h4>
                  <ul class="ps-0 list-unstyled nl_footer_list_menu">
                    <li>
                      <nuxtLink
                        to="/residential"
                        class="nl-font-body nl-fs-18 nl-lh-30"
                        >Residential</nuxtLink
                      >
                    </li>
                    <li>
                      <nuxtLink
                        to="/commercial"
                        class="nl-font-body nl-fs-18 nl-lh-30"
                        >Commercial</nuxtLink
                      >
                    </li>
                    <li>
                      <nuxtLink
                        to="/plot"
                        class="nl-font-body nl-fs-18 nl-lh-30"
                        >Plots</nuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col-12 col-lg-12 col-xl-2 col-xxl-2 col-md-6 col-sm-12 nl-mtp"
              >
                <div class="nl_footer_top_link nl-mobile-mt">
                  <h4
                    class="nl-fs-22 nl-color-white-opacity nl-lh-24 nl-font-heading pb-30"
                  >
                    Pages
                  </h4>
                  <ul class="ps-0 list-unstyled nl_footer_list_menu">
                    <li>
                      <nuxtLink
                        to="/about-us"
                        class="nl-font-body nl-fs-18 nl-lh-30"
                        >About Us</nuxtLink
                      >
                    </li>
                    <li>
                      <nuxtLink
                        to="/gallery"
                        class="nl-font-body nl-fs-18 nl-lh-30"
                        >Gallery</nuxtLink
                      >
                    </li>
                    <li>
                      <nuxtLink
                        to="/ourTeam"
                        class="nl-font-body nl-fs-18 nl-lh-30"
                        >Our Team</nuxtLink
                      >
                    </li>
                    <li>
                      <nuxtLink
                        to="/contact"
                        class="nl-font-body nl-fs-18 nl-lh-30"
                        >Contact Us</nuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- <div
                class="col-12 col-lg-12 col-xl-3 col-xxl-3 col-md-6 col-sm-12 ps-0"
              >
                <div class="nl_footer_top_link nl-mobile-mt nl-footer-padding">
                  <h4
                    class="nl-fs-22 nl-color-white-opacity nl-lh-24 nl-font-heading pb-30"
                  >
                    Recent Posts
                  </h4>
                  <ul
                    class="ps-0 list-unstyled nl_footer_list_menu nl_footer_list_menu_icon"
                  >
                    <li>
                      <a
                        href="#"
                        class="nl-font-body nl-fs-18 nl-lh-30 d-flex gap-2 pb-2"
                        ><span
                          ><svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              d="M7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.3125 13.125 1.65625 13.125 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125Z"
                              fill="white"
                            />
                          </svg> </span
                        ><span>Protfolio</span></a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="nl-font-body nl-fs-18 nl-lh-30 d-flex gap-2 pb-2"
                        ><span
                          ><svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              d="M7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.3125 13.125 1.65625 13.125 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125Z"
                              fill="white"
                            /></svg></span
                        ><span>Gallery</span></a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="nl-font-body nl-fs-18 nl-lh-30 d-flex gap-2 pb-2"
                        ><span
                          ><svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              d="M7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.3125 13.125 1.65625 13.125 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125Z"
                              fill="white"
                            /></svg></span
                        ><span>Blog</span></a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="nl-font-body nl-fs-18 nl-lh-30 d-flex gap-2"
                        ><span
                          ><svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              d="M7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.3125 13.125 1.65625 13.125 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125Z"
                              fill="white"
                            /></svg></span
                        ><span>About Us</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div> -->
            </div>
          </div>
          <div
            class="nlv2_footer_bottom d-flex justify-content-between pt-25 pb-25 nl-dw nl-cr"
          >
            <div id="app">
              ©{{ new Date().getFullYear() }} Maniraj Properties | All Rights
              Reserved
            </div>
            <div
              class="nlv2_footer_bottom_link d-flex justify-content-between gap-3 nl-dw nl-ac"
            >
              <a href="https://thewebtime.in/" target="_blank">
                Designed & Develope By TWT</a
              >
              <!-- <a
                href="#"
                class="nl_animation_text_link nl-f16 nl-fw4 nl-bcl nl-ffb"
                data-replace="Privacy Policy"
              >
                <span class="nl_animation_text_linksp">Privacy Policy</span></a
              >
              <a
                href="#"
                class="nl_animation_text_link nl-f16 nl-fw4 nl-bcl nl-ffb"
                data-replace="Sitemap"
              >
                <span class="nl_animation_text_linksp">Sitemap</span></a
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer Section End -->
</template>

<script>
export default {
  components: {},
  data() {
    return {
      insertData: {
        email: "",
      },
      site: {},
      about: {},
    };
  },
  mounted() {},
  created() {
    this.fetchDataSite();
  },
  methods: {
    resetValues() {
      this.insertData.email = "";
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
    update() {
      api()
        .post("/news-letter-mail-store", this.insertData)
        .then((res) => {
          if (res.data.success) {
            this.resetValues();
            alert(res.data.message);
          } else {
            alert(res.data.message);
          }
        })
        .catch((e) => {
          alert("Something went wrong, please try again");
        });
    },
  },
};
</script>

<style scoped></style>
