<template>
  <!--Bredcrumb menu start-->

  <section class="nlv2_bredcrumb nl-bg1 pt-140 pb-140 nl-bg-color-black">
    <div class="nlv2_bredcrumb_wrapper">
      <div class="container">
        <div class="nlv2_bredcrumb_wrapper_container">
          <h2
            class="nl-fs-48 nl-lh-62 nl-color-white nl-font-heading text-center nl-font-body pb-15 has_fade_anim"
          >
            Our Team
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
            <span class="">Our Team</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Bredcrumb menu end-->
  <!-- Property Details Start-->
  <section
    class="nl__property-details-section nl-bg-color-gray-100 nl-section-pb"
  >
    <br /><br />
    <div class="container container-1290">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="nl__section-subtitle">
            <h5
              class="nl-color-brown nl-fs-14 nl-fw-500 nl-lh-19 nl-ls-1 text-uppercase nl-font-body has_fade_anim"
            >
              Our Team
            </h5>
          </div>
          <div
            class="nl__section-title pt-20 pb-60 m-auto nl__about-section-title"
          >
            <h2 class="nl-fs-48 nl-lh-62 nl-color-black has_fade_anim">
              Meet Our Property Pioneers
            </h2>
          </div>
        </div>
      </div>
      <div class="nl__property-item-wraper row g-30 justify-content-center">
        <div
          class="col-xl-4 col-lg-6 col-md-6"
          v-for="(item, index) in team"
          :key="index"
        >
          <div
            class="nl__property-item zoom-in-pora overflow-hidden has_fade_anim"
          >
            <div
              class="nl__faq-banner-img has_fade_anim image-hover"
              v-if="item.image"
            >
              <img :src="item.image" alt="" />
              <!-- <div
                class="nl__featured-badge nl-font-heading nl-fs-18 nl-lh-24 nl-color-black nl-border-radius-5 bg-white"
              >
                {{ item.role }}
              </div> -->
            </div>
            <div class="nl__property-details-wrap has_fade_anim">
              <div
                class="nl__property-details bg-white nl-border-radius-5 z-2 position-relative"
              >
                <div
                  class="nl__property-name-and--price d-flex align-items-center justify-content-between justify-content-between"
                >
                  <div class="nl__property-name" v-if="item.name">
                    <h4 class="nl-color-black nl-fs-22 nl-lh-26">
                      {{ item.name }}
                    </h4>
                  </div>
                  <div
                    class="nl__property-price nl-font-heading nl-fs-18 nl-lh-24 nl-color-black nl-bg-color-gray-100 pt-10 pr-10 pb-10 pl-10"
                    v-if="item.role"
                  >
                    {{ item.role }}
                  </div>
                </div>
                <!-- <div
                  class="nl__property-location d-flex align-items-center nl-color-gray-800 mt-20"
                >
                  <i class="nl-icon nl-icon-location-marker nl-color-black"></i>
                  <span>Cumilla kandirpar</span>
                </div>
                <div class="nl__property-meta-wrap d-flex flex-row">
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-bed nl-color-black"></i>
                    <span>6 Bed</span>
                  </div>
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-bathtub nl-color-black"></i>
                    <span>2 Bath</span>
                  </div>
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-sqft nl-color-black"></i>
                    <span>1200 Sqft</span>
                  </div>
                </div>
                <div
                  class="nl__property-sale-and--wish-badge d-flex align-items-center justify-content-between mt-20"
                >
                  <p class="nl-color-gray-800">For Sale</p>
                  <i class="nl-icon nl-icon-heart nl-color-brown"></i>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-xl-4 col-lg-6 col-md-6">
          <div
            class="nl__property-item zoom-in-pora overflow-hidden has_fade_anim"
          >
            <div
              class="nl__property-img position-relative nl-border-radius-5 image-hover"
            >
              <img src="/images/propety-img-2.png" alt="" />
              <div
                class="nl__featured-badge nl-font-heading nl-fs-18 nl-lh-24 nl-color-black nl-border-radius-5 bg-white"
              >
                Featured
              </div>
            </div>
            <div class="nl__property-details-wrap has_fade_anim">
              <div
                class="nl__property-details bg-white nl-border-radius-5 z-2 position-relative"
              >
                <div
                  class="nl__property-name-and--price d-flex align-items-center justify-content-between"
                >
                  <div class="nl__property-name">
                    <h4
                      class="nl-color-black nl-fs-22 nl-lh-26 has_text_move_anim"
                    >
                      Urban Living Experts
                    </h4>
                  </div>
                  <div
                    class="nl__property-price nl-font-heading nl-fs-18 nl-lh-24 nl-color-black nl-bg-color-gray-100 pt-10 pr-10 pb-10 pl-10"
                  >
                    $5500/m
                  </div>
                </div>
                <div
                  class="nl__property-location d-flex align-items-center nl-color-gray-800 mt-20"
                >
                  <i class="nl-icon nl-icon-location-marker nl-color-black"></i>
                  <span>Cumilla kandirpar</span>
                </div>
                <div class="nl__property-meta-wrap d-flex flex-row">
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-bed nl-color-black"></i>
                    <span>6 Bed</span>
                  </div>
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-bathtub nl-color-black"></i>
                    <span>2 Bath</span>
                  </div>
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-sqft nl-color-black"></i>
                    <span>1200 Sqft</span>
                  </div>
                </div>
                <div
                  class="nl__property-sale-and--wish-badge d-flex align-items-center justify-content-between mt-20"
                >
                  <p class="nl-color-gray-800">For Sale</p>
                  <i class="nl-icon nl-icon-heart nl-color-brown"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div
            class="nl__property-item zoom-in-pora overflow-hidden has_fade_anim"
          >
            <div
              class="nl__property-img position-relative nl-border-radius-5 image-hover"
            >
              <img src="/images/propety-img-3.png" alt="" />
              <div
                class="nl__featured-badge nl-font-heading nl-fs-18 nl-lh-24 nl-color-black nl-border-radius-5 bg-white"
              >
                Featured
              </div>
            </div>
            <div class="nl__property-details-wrap has_fade_anim">
              <div
                class="nl__property-details bg-white nl-border-radius-5 z-2 position-relative"
              >
                <div
                  class="nl__property-name-and--price d-flex align-items-center justify-content-between"
                >
                  <div class="nl__property-name">
                    <h4
                      class="nl-color-black nl-fs-22 nl-lh-26 has_text_move_anim"
                    >
                      Apartment Member
                    </h4>
                  </div>
                  <div
                    class="nl__property-price nl-font-heading nl-fs-18 nl-lh-24 nl-color-black nl-bg-color-gray-100 pt-10 pr-10 pb-10 pl-10"
                  >
                    $5500/m
                  </div>
                </div>
                <div
                  class="nl__property-location d-flex align-items-center nl-color-gray-800 mt-20"
                >
                  <i class="nl-icon nl-icon-location-marker nl-color-black"></i>
                  <span>Cumilla kandirpar</span>
                </div>
                <div class="nl__property-meta-wrap d-flex flex-row">
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-bed nl-color-black"></i>
                    <span>6 Bed</span>
                  </div>
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-bathtub nl-color-black"></i>
                    <span>2 Bath</span>
                  </div>
                  <div
                    class="nl__property-meta-item nl-color-gray-800 d-flex align-items-center"
                  >
                    <i class="nl-icon nl-icon-sqft nl-color-black"></i>
                    <span>1200 Sqft</span>
                  </div>
                </div>
                <div
                  class="nl__property-sale-and--wish-badge d-flex align-items-center justify-content-between mt-20"
                >
                  <p class="nl-color-gray-800">For Sale</p>
                  <i class="nl-icon nl-icon-heart nl-color-brown"></i>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <!-- Property Details End-->
</template>
<script>
export default {
  data() {
    return {
      team: {},
    };
  },
  created() {
    this.fetchDataTeam();
  },
  methods: {
    fetchDataTeam() {
      api()
        .get("user-side/show-all-team-member")
        .then((res) => {
          if (res.data.success) {
            this.team = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
