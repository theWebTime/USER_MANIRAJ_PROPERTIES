<template>
  <!-- Gallery Start-->
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
              <div class="nlv2_gallery_big has_fade_anim image-hover">
                <img :src="item.data" alt="" />
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
  <!-- Gallery End-->
</template>
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
