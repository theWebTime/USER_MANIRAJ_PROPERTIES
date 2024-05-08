<template>
  <section class="pt-120 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="mb-40">
            <p
              class="nl-color-brown nl-fs-14 nl-font-body nl-lh-19 mb-20 text-uppercase has_fade_anim"
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
        <div class="ns-service-info-contain mb-30 has_fade_anim">
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
        <div class="ns-service-info-contain mb-30 has_fade_anim">
          <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black mb-10">
            <i class="nl-icon nl-icon-circle-check"></i>

            Property Status
          </h4>

          <p
            class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 has_fade_anim"
          >
            {{ item.status_name }}
          </p>
        </div>
        <div class="ns-service-info-contain mb-30 has_fade_anim">
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
        <div class="ns-service-info-contain mb-30 has_fade_anim">
          <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black mb-10">
            <i class="nl-icon nl-icon-circle-check"></i>

            IFRAME
          </h4>

          <p
            class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 has_fade_anim"
          >
            <iframe width="800" height="230" :src="item.iframe"></iframe>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
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
