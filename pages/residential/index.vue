<template>
  <!-- Dsign Section Start -->
  <div class="nlv2_dsign nl-bg-color-gray-100">
    <div class="nlv2_dsign_wrapper">
      <div class="container container-1290">
        <div class="nlv2_dsign_wrapper_container nl-section-pt nl-section-pb">
          <div class="nlv2_dsign-box">
            <div class="row g-30">
              <div
                class="col-lg-6 col-md-6 has_fade_anim"
                v-for="(item, index) in residential"
                :key="index"
              >
                <div
                  class="nlv2_dsign-box-main nl-bg-color-white position-relative nl-border-radius-5 nl-button-hover image-hover"
                >
                  <NuxtLink :to="'/residential/' + item.id">
                    <img :src="item.image" alt=""
                  /></NuxtLink>
                  <div
                    class="nlv2_dsign-box-content position-absolute nl-bg-color-white mr-20 ml-20 nl-border-radius-5 pl-30 pt-30 pb-30"
                  >
                    <a
                      href="#"
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black has_fade_anim"
                    >
                      <NuxtLink :to="'/residential/' + item.id">
                        {{ item.name }}
                      </NuxtLink>
                    </a>
                    <p
                      class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800 has_fade_anim"
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Dsign Section End -->
</template>
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
