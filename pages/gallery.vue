<template>
  <!--Bredcrumb menu start-->

  <section class="nlv2_bredcrumb nl-bg1 pt-140 pb-140 nl-bg-color-black">
    <div class="nlv2_bredcrumb_wrapper">
      <div class="container">
        <div class="nlv2_bredcrumb_wrapper_container">
          <h2
            class="nl-fs-48 nl-lh-62 nl-color-white nl-font-heading text-center nl-font-body pb-15 has_fade_anim"
          >
            Gallery
          </h2>
          <div
            class="nlv2_bredcrumb_top nl-color-white nl-fs-18 nl-lh-30 d-flex gap-3 justify-content-center align-items-center has_fade_anim"
          >
            <a href="/">Home</a>
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
            <span class="">Gallery</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Bredcrumb menu end-->
  <!-- Gallery Start-->
  <div v-if="gallery.length > 0">
    <div class="nlv2_gallery nl-section-pb nl-bg-color-gray-100">
      <div class="nlv2_gallery_wrapper">
        <div class="nlv2_gallery_container pl-90 pr-90">
          <div class="nlv2_gallery_wrapper_container">
            <div class="row g-30">
              <div
                class="col-lg-4 col-md-6"
                v-for="(item, index) in gallery"
                :key="index"
              >
                <div
                  class="nlv2_gallery_big has_fade_anim image-hover"
                  v-if="item.data"
                >
                  <img
                    :src="item.data"
                    style="height: 624px; width: 635px"
                    alt=""
                  />
                </div>
              </div>
              <!-- <div class="col-lg-4 col-md-6">
              <div class="nlv2_gallery_small has_fade_anim">
                <div class="nlv2_gallery_small-midoll image-hover">
                  <img src="/images/Gallery/gallery01.jpg" alt="" />
                </div>
                <div class="nlv2_gallery_small-midoll image-hover">
                  <img src="/images/Gallery/gallery04.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="nlv2_gallery_big has_fade_anim image-hover">
                <img src="/images/Gallery/gallery02.jpg" alt="" />
              </div>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row g-30" v-else>
    <img src="/images/no_data_found.png" style="height: 900px" alt="" />
  </div>
  <!-- Gallery End-->
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
      gallery: {},
    };
  },
  mounted() {},
  created() {
    this.fetchDataResidential();
  },
  methods: {
    fetchDataResidential() {
      api()
        .get("user-side/show-all-gallery")
        .then((res) => {
          if (res.data.success) {
            this.gallery = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
