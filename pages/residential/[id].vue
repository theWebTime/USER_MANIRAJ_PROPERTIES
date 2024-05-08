<template>
  <!-- ns-project start  -->
  <section class="pb-120 pt-120">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7" v-if="residential.residentialDetail">
          <div>
            <h4
              class="nl-fs-48 nl-font-heading nl-lh-62 nl-color-black mb-25 has_fade_anim"
            >
              {{ residential.residentialDetail.residential_name }}
            </h4>

            <p
              class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 mb-20 has_fade_anim"
            >
              {{ residential.residentialDetail.description }}
            </p>
          </div>
        </div>

        <div class="col-12 col-md-5" v-if="residential.residentialDetail">
          <div class="ns-project-category has_fade_anim">
            <ul>
              <li>
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  No BHK
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.no_bhk }}
                </h4>
              </li>

              <li>
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Square Yard
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.square_yard }}
                </h4>
              </li>

              <li>
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Status
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.status_name }}
                </h4>
              </li>

              <li>
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Shop Square Feet
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.shop_square_feet }}
                </h4>
              </li>
              <li>
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Location
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.location }}
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="ns-project-details-img mt-60 image-hover"
        v-if="residential.residentialDetail"
      >
        <img
          :src="residential.residentialDetail.image"
          alt="project-details.png"
        />
      </div>
    </div>
    <br /><br /><br /><br />
    <!-- Gallery Start-->
    <div class="nlv2_gallery nl-section-pb nl-bg-color-gray-100">
      <div class="nlv2_gallery_wrapper">
        <div class="nlv2_gallery_container pl-90 pr-90">
          <div class="nlv2_gallery_wrapper_container">
            <div class="row g-30">
              <div
                class="col-lg-4 col-md-6"
                v-for="(item, index) in residential.residentialGallery"
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
    <!-- Searvice Section Start -->
    <div class="nlv2_searvice nl-bg-color-white">
      <div class="nlv2_searvice_wrapper">
        <div class="container container-1290">
          <div
            class="nlv2_searvice_wrapper_container nl-section-pt nl-section-pb"
          >
            <div class="nlv2_searvice-top-part pb-60">
              <p
                class="nl-fs-14 nl-font-body nl-lh-19 text-uppercase nl-color-brown nl-fw-500 nl-ls-1 pb-20 text-center"
              >
                Amenities
              </p>
              <h2
                class="nl-fs-48 nl-font-heading nl-lh-62 nl-color-black nl-width-45 m-auto text-center has_fade_anim"
              >
                Turning Estate properties into Design
              </h2>
            </div>
            <div class="nlv2_searvice-box">
              <div class="row g-30">
                <div
                  class="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12"
                  v-for="(item, index) in residential.residentialAmenities"
                  :key="index"
                >
                  <div
                    class="nlv2_searvice-box-main nl-searvice-boxv2 text-center nl-bg-color-gray-100 pt-40 pb-60 pl-40 pr-40 nl-button-hover has_fade_anim"
                  >
                    <div class="nl-button overflow-hidden">
                      <i
                        class="nl-icon nl-icon-home-2 nl-fs-65 nl-color-brown"
                      ></i>
                    </div>

                    <h6
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black pt-30 pb-20"
                    >
                      {{ item.name }}
                    </h6>
                    <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
                <!-- <div class="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12">
                                    <div class="nlv2_searvice-box-main nl-searvice-boxv2 text-center nl-bg-color-gray-100 pt-40 pb-60 pl-40 pr-40 nl-button-hover has_fade_anim">
                                        <div class="nl-button overflow-hidden">
                                            <i
                                                    class="nl-icon nl-icon-home-3 nl-fs-65 nl-color-brown"
                                            ></i>
                                        </div>

                                        <h6
                                                class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black pt-30 pb-20">
                                            Castle Key Properties
                                        </h6>
                                        <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                                            Purus velit aenean quis habitant eros bibendum aenean quis
                                            habit aerosPurus velit aenean quis habitant eros
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12">
                                    <div class="nlv2_searvice-box-main nl-searvice-boxv2 text-center nl-bg-color-gray-100 pt-40 pb-60 pl-40 pr-40 nl-button-hover has_fade_anim">
                                        <div class="nl-button overflow-hidden">
                                            <i
                                                    class="nl-icon nl-icon-sofa nl-fs-65 nl-color-brown"
                                            ></i>
                                        </div>
                                        <h6 class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black pt-30 pb-20">
                                            Parkside Residential
                                        </h6>
                                        <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                                            Purus velit aenean quis habitant eros bibendum aenean quis
                                            habit aerosPurus velit aenean quis habitant eros
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12">
                                    <div class="nlv2_searvice-box-main nl-searvice-boxv2 text-center nl-bg-color-gray-100 pt-40 pb-60 pl-40 pr-40 nl-button-hover has_fade_anim">
                                        <div class="nl-button overflow-hidden">
                                            <i
                                                    class="nl-icon nl-icon-design nl-fs-65 nl-color-brown"
                                            ></i>
                                        </div>
                                        <h6 class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black pt-30 pb-20">
                                            Parkside Residential
                                        </h6>
                                        <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                                            Purus velit aenean quis habitant eros bibendum aenean quis
                                            habit aerosPurus velit aenean quis habitant eros
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12">
                                    <div class="nlv2_searvice-box-main nl-searvice-boxv2 text-center nl-bg-color-gray-100 pt-40 pb-60 pl-40 pr-40 nl-button-hover has_fade_anim">
                                        <div class="nl-button overflow-hidden">
                                            <i
                                                    class="nl-icon nl-icon-key nl-fs-65 nl-color-brown"
                                            ></i>
                                        </div>
                                        <h6 class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black pt-30 pb-20">
                                            Parkside Residential
                                        </h6>
                                        <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                                            Purus velit aenean quis habitant eros bibendum aenean quis
                                            habit aerosPurus velit aenean quis habitant eros
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12">
                                    <div class="nlv2_searvice-box-main nl-searvice-boxv2 text-center nl-bg-color-gray-100 pt-40 pb-60 pl-40 pr-40 nl-button-hover has_fade_anim">
                                        <div class="nl-button overflow-hidden">
                                            <i
                                                    class="nl-icon nl-icon-house-location nl-fs-65 nl-color-brown"
                                            ></i>
                                        </div>
                                        <h6 class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black pt-30 pb-20">
                                            Parkside Residential
                                        </h6>
                                        <p class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800">
                                            Purus velit aenean quis habitant eros bibendum aenean quis
                                            habit aerosPurus velit aenean quis habitant eros
                                        </p>
                                    </div>
                                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Searvice Section End -->
  </section>
  <!-- ns-project End  -->
</template>
<script>
export default {
  // layout: 'default',
  components: {},
  data() {
    return {
      residential: {},
      residential_show: this.$route.params.id,
    };
  },
  mounted() {},
  created() {
    this.fetchDataResidential();
  },
  methods: {
    fetchDataResidential() {
      api()
        .post("user-side/show-all-residential-detail", {
          residential_show: this.residential_show,
        })
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
