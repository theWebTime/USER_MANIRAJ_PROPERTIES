<template>
    <!--Bredcrumb menu start-->

    <section class="nlv2_bredcrumb nl-bg1 pt-140 pb-140 nl-bg-color-black">
    <div class="nlv2_bredcrumb_wrapper">
      <div class="container">
        <div class="nlv2_bredcrumb_wrapper_container">
          <h2
            class="nl-fs-48 nl-lh-62 nl-color-white nl-font-heading text-center nl-font-body pb-15 has_fade_anim"
          >
            Plot
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
            <span class="">Plot</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Bredcrumb menu end-->
  <section class="pt-120 pb-110" v-if="plot.length > 0">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="mb-40">
            <p
              class="nl-color-brown nl-fs-14 nl-font-body nl-lh-19 mb-20 nl-font-heading text-uppercase has_fade_anim"
            >
              <h1>PLOTS</h1>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-for="(item, index) in plot" :key="index">
      <br /><br /><br />
      <div
        class="nlv2_blog_single_content pt-40 pb-35 pl-40 pr-40 nl-bg-color-gray-100 nl-border-radius-5 has_fade_anim"
      >
      <h4 class="nl-fs-22 nl-font-heading nl-lh-24 nl-color-black mb-10">{{ index+1 }}.</h4>
        <!-- <div class="nlv2_blog_single_meta mb-20">
          <span class="nl_animation_title_main"
            ><a
              href="#"
              class="nl-fs-18 nl-color-black nl-lh-26 nl-font-heading"
              >Type Of Property</a
            ></span
          >
          <span class="nl_animation_title_main"
            ><a
              href="#"
              class="nl-fs-18 nl-color-gray-800 nl-lh-30 nl-font-body"
              >{{ item.type }}
            </a></span
          >
        </div> -->
        <div class="ns-service-info-contain mb-30 has_fade_anim" v-if="item.title">
          <p
            class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 has_fade_anim" 
          >
            {{ item.title }}
          </p>
        </div>
        <div class="ns-service-info-contain mb-30 has_fade_anim" v-if="item.image">
          <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black mb-10">
            <i class="nl-icon nl-icon-circle-check"></i>

            Image
          </h4>
          <img
            :src="item.image"
            style="height: 270px; width: 410px; border-radius: 10px"
            alt=""
          />
        </div>
        
        <div class="ns-service-info-contain mb-30 has_fade_anim" v-if="item.square_yard">
          <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black mb-10">
            <i class="nl-icon nl-icon-circle-check"></i>

            Square Yard
          </h4>

          <p
            class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 has_fade_anim" 
          >
            {{ item.square_yard }}
          </p>
        </div>
        <div class="ns-service-info-contain mb-30 has_fade_anim" v-if="item.status_name">
          <p
            class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 has_fade_anim" 
          >
            {{ item.status_name }}
          </p>
        </div>
        <div class="ns-service-info-contain mb-30 has_fade_anim" v-if="item.location">
          <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black mb-10">
            <i class="nl-icon nl-icon-circle-check"></i>

            location
          </h4>

          <p
            class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 has_fade_anim" 
          >
            {{ item.location }}
          </p>
        </div>
        <div class="iframe-container" v-if="item.iframe">
            <iframe :src="item.iframe" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>
  <div class="row g-30" v-else>
              <img src="/images/no_data_found.png" style="height: 900px;" alt="" />
            </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { loadScript, unloadScript } from '~/utils/scriptManager';

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
      plot: {},
    };
  },
  mounted() {},
  created() {
    this.fetchDataPlot();
  },
  methods: {
    fetchDataPlot() {
      api()
        .get("user-side/show-all-plot")
        .then((res) => {
          if (res.data.success) {
            this.plot = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (100 / (16 / 9)) */
  height: 0;
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
