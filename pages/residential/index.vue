<template>
  <!--Bredcrumb menu start-->

  <section class="nlv2_bredcrumb nl-bg1 pt-140 pb-140 nl-bg-color-black">
    <div class="nlv2_bredcrumb_wrapper">
      <div class="container">
        <div class="nlv2_bredcrumb_wrapper_container">
          <h2
            class="nl-fs-48 nl-lh-62 nl-color-white nl-font-heading text-center nl-font-body pb-15 has_fade_anim"
          >
            Residential
          </h2>
          <div
            class="nlv2_bredcrumb_top nl-color-white nl-fs-18 nl-lh-30 d-flex gap-3 justify-content-center align-items-center has_fade_anim"
          >
            <a href="#" class="nl-color-white">Home</a>
            <svg
              width="9"
              height="13"
              viewBox="0 0 9 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13C1.71875 13 1.46875 12.9062 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.5 12.9062 2.25 13 2 13Z"
                fill="white"
              />
            </svg>
            <span class="">Residential</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Bredcrumb menu end-->
  <!-- Dsign Section Start -->
  <div class="nlv2_dsign nl-bg-color-gray-100">
    <div class="nlv2_dsign_wrapper">
      <div class="container container-1290">
        <div class="nlv2_dsign_wrapper_container nl-section-pt nl-section-pb">
          <div class="nlv2_dsign-box">
            <div class="row g-30" v-if="residential.length > 0">
              <div
                class="col-lg-6 col-md-6 has_fade_anim"
                v-for="(item, index) in residential"
                :key="index"
              >
                <div
                  class="nlv2_dsign-box-main nl-bg-color-white position-relative nl-border-radius-5 nl-button-hover image-hover"
                  v-if="item.image"
                >
                  <nuxt-link :to="'/residential/' + item.id">
                    <img :src="item.image" alt=""
                  /></nuxt-link>
                  <div
                    class="nlv2_dsign-box-content position-absolute nl-bg-color-white mr-20 ml-20 nl-border-radius-5 pl-30 pt-30 pb-30"
                  >
                    <a
                      href="#"
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black has_fade_anim"
                      v-if="item.name"
                    >
                      <nuxt-link :to="'/residential/' + item.id">
                        {{ item.name }}
                      </nuxt-link>
                    </a>
                    <p
                      class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800 has_fade_anim"
                      v-if="item.location"
                    >
                      {{ item.location }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- <div class="col-lg-6 col-md-6 has_fade_anim">
                <div
                  class="nlv2_dsign-box-main nl-bg-color-white position-relative nl-border-radius-5 nl-button-hover image-hover"
                >
                  <img src="/images/dsign/dsign2.jpg" alt="" />
                  <div
                    class="nlv2_dsign-box-content position-absolute nl-bg-color-white mr-20 ml-20 nl-border-radius-5 pl-30 pt-30 pb-30"
                  >
                    <a
                      href="#"
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black has_fade_anim"
                    >
                      Innovate Grows Succeed
                    </a>
                    <p
                      class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800 has_fade_anim"
                    >
                      RealtyRise
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 has_fade_anim">
                <div
                  class="nlv2_dsign-box-main nl-bg-color-white position-relative nl-border-radius-5 nl-button-hover image-hover"
                >
                  <img src="/images/dsign/dsign3.jpg" alt="" />
                  <div
                    class="nlv2_dsign-box-content position-absolute nl-bg-color-white mr-20 ml-20 nl-border-radius-5 pl-30 pt-30 pb-30"
                  >
                    <a
                      href="#"
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black"
                    >
                      Innovate Grow Succeed
                    </a>
                    <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                      RealtyRise
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 has_fade_anim">
                <div
                  class="nlv2_dsign-box-main nl-bg-color-white position-relative nl-border-radius-5 nl-button-hover image-hover"
                >
                  <img src="/images/dsign/dsign4.jpg" alt="" />
                  <div
                    class="nlv2_dsign-box-content position-absolute nl-bg-color-white mr-20 ml-20 nl-border-radius-5 pl-30 pt-30 pb-30"
                  >
                    <a
                      href="#"
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black"
                    >
                      Innovate Grow Succeed
                    </a>
                    <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                      RealtyRise
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 has_fade_anim">
                <div
                  class="nlv2_dsign-box-main nl-bg-color-white position-relative nl-border-radius-5 nl-button-hover image-hover"
                >
                  <img src="/images/dsign/dsign5.jpg" alt="" />
                  <div
                    class="nlv2_dsign-box-content position-absolute nl-bg-color-white mr-20 ml-20 nl-border-radius-5 pl-30 pt-30 pb-30"
                  >
                    <a
                      href="#"
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black"
                    >
                      Innovate Grow Succeed
                    </a>
                    <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                      RealtyRise
                    </p>
                  </div>
                </div>
              </div> -->
            </div>
            <div class="row g-30" v-else>
              <img
                src="/images/no_data_found.png"
                style="height: 900px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Dsign Section End -->
</template>
<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { loadScript, unloadScript } from "~/utils/scriptManager";

const scripts = [
  "/js/jquery.js",
  "/js/bootstrap.bundle.min.js",
  "/js/lity.min.js",
  "/js/gsap.min.js",
  "/js/locomotive-scroll.min.js",
  "/js/ScrollTrigger.min.js",
  "/js/SplitText.min.js",
  "/js/marquee.min.js",
  "/js/swiper-bundle.min.js",
  "/js/appear.js",
  "/js/odometer.min.js",
  // "/js/count.js",
  "/js/ScrollToPlugin.min.js",
  "/js/script.js",
  // "/js/ThemeAnim.js"
];

onMounted(async () => {
  for (const script of scripts) {
    try {
      await loadScript(script);
    } catch (error) {
      console.error(error.message);
    }
  }
});

onBeforeUnmount(() => {
  for (const script of scripts) {
    unloadScript(script);
  }
});
</script>
<script>
export default {
  // layout: 'default',
  components: {},
  data() {
    return {
      residential: {},
    };
  },
  mounted() {},
  created() {
    this.fetchDataResidential();
  },
  methods: {
    fetchDataResidential() {
      api()
        .get("user-side/show-all-residential")
        .then((res) => {
          if (res.data.success) {
            this.residential = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
