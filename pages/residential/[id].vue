<template>
  <!--Bredcrumb menu start-->

  <section class="nlv2_bredcrumb nl-bg1 pt-140 pb-140 nl-bg-color-black">
    <div class="nlv2_bredcrumb_wrapper">
      <div class="container">
        <div class="nlv2_bredcrumb_wrapper_container">
          <h2
            class="nl-fs-48 nl-lh-62 nl-color-white nl-font-heading text-center nl-font-body pb-15 has_fade_anim"
          >
            Residential Detail
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
            <span class="">Residential Detail</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Bredcrumb menu end-->
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
              <li v-if="residential.residentialProperty">
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Number Of BHK
                </p>

                <h4
                  class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black"
                  v-for="(item, index) in residential.residentialProperty"
                  :key="index"
                >
                  {{ item.no_bhk }}
                </h4>
              </li>
              <li v-if="residential.residentialFloor.length > 0">
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Floor
                </p>

                <h4
                  class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black"
                  v-for="(item, index) in residential.residentialFloor"
                  :key="index"
                >
                  {{ item.floor }}
                </h4>
              </li>
              <li v-if="residential.residentialDetail.square_yard">
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Square Yard
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.square_yard }}
                </h4>
              </li>

              <li v-if="residential.residentialDetail.price">
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Price
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.price }}
                </h4>
              </li>

              <li v-if="residential.residentialDetail.possession">
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Possession
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.possession }}
                </h4>
              </li>

              <li v-if="residential.residentialDetail.status_name">
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Status
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.status_name }}
                </h4>
              </li>

              <li v-if="residential.residentialDetail.shop_square_feet">
                <p class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800">
                  Shop Square Feet
                </p>

                <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black">
                  {{ residential.residentialDetail.shop_square_feet }}
                </h4>
              </li>
              <li v-if="residential.residentialDetail.location">
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
      <!--  <div
        class="ns-project-details-img mt-60 image-hover"
        v-if="residential.residentialDetail"
      >
        <img
          :src="residential.residentialDetail.image"
          style="height: 694px; width: 1290px"
          alt="project-details.png"
        />
      </div> --><br /><br />
      <div
        class="responsive-image-container"
        v-if="residential.residentialDetail"
      >
        <img
          :src="residential.residentialDetail.image"
          style="border-radius: 10px"
          alt="Responsive Image"
          class="responsive-image"
        />
      </div>
    </div>
    <!-- <br /><br />
    <div
      v-if="
        residential.residentialFloor && residential.residentialFloor.length > 0
      "
    >
      <div class="nlv2_searvice-top-part pb-60">
        <p
          class="nl-fs-14 nl-font-body nl-lh-19 text-uppercase nl-color-brown nl-fw-500 nl-ls-1 pb-20 text-center"
        >
          Residential Floors
        </p>
      </div>
      <div
        class="container"
        v-for="(item, index) in residential.residentialFloor"
        :key="index"
      >
        <br /><br /><br />
        <div
          class="nlv2_blog_single_content pt-40 pb-35 pl-40 pr-40 nl-bg-color-gray-100 nl-border-radius-5 has_fade_anim"
        >
          <div
            class="ns-service-info-contain mb-30 has_fade_anim"
            v-if="item.floor"
          >
            <h4 class="nl-fs-18 nl-font-heading nl-lh-24 nl-color-black mb-10">
              <i class="nl-icon nl-icon-circle-check"></i>

              Floors
            </h4>

            <p
              class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 has_fade_anim"
            >
              {{ item.floor }}
            </p>
          </div>
        </div>
      </div>
    </div> -->

    <br /><br />
    <div
      v-if="
        residential.residentialGallery &&
        residential.residentialGallery.length > 0
      "
    >
      <div class="nlv2_searvice-top-part pb-60">
        <p
          class="nl-fs-14 nl-font-body nl-lh-19 text-uppercase nl-color-brown nl-fw-500 nl-ls-1 pb-20 text-center"
        >
          Residential Gallery
        </p>
      </div>
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
    <!-- Gallery End-->
    <!-- Searvice Section Start -->
    <div
      class="nlv2_searvice nl-bg-color-white"
      v-if="
        residential.residentialAmenities &&
        residential.residentialAmenities.length > 0
      "
    >
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
                Signature Amenities: Redefining Comfort and Convenience
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
                    class="nlv2_searvice-box-main nl-searvice-boxv2 text-center nl-bg-color-gray-100 pt-20 pb-20 pl-20 pr-20 nl-button-hover has_fade_anim"
                  >
                    <div class="nl-button overflow-hidden">
                      <img
                        src="/images/Maniraj-icon.png"
                        alt=""
                        height="100"
                        width="100"
                        style="border-radius: 50px"
                      />
                    </div>

                    <h6
                      class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black pt-10 pb-10"
                      v-if="item.name"
                    >
                      {{ item.name }}
                    </h6>
                    <!-- <p
    class="nl-fs-18 nl-font-body nl-lh-26 nl-color-gray-800"
    v-if="item.description"
  >
    {{ item.description }}
  </p> -->
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
  <section class="nlv2_contact_from nl-bg-color-white pb-85">
    <div class="nlv2_contact_fromwrapper">
      <div class="container container-1290">
        <div class="nlv2_contact_from_wrapper_container">
          <div class="row">
            <div class="col-lg-12" v-if="!formSubmitted">
              <h2
                class="nl-fs-48 nl-lh-62 nl-color-black nl-font-heading text-center has_fade_anim"
              >
                Inquiry For This Property
              </h2>
              <form
                class="nb-contact-form pt-50 has_fade_anim"
                ref="form"
                @submit.prevent="submitForm()"
              >
                <div
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                  v-if="isError"
                >
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                  <strong>Error!</strong> {{ errorMessage }}.
                  <ul v-for="(value, key) in errors" :key="key">
                    <li v-for="(value1, key1) in value" :key="key1">
                      -> {{ value1 }}
                    </li>
                  </ul>
                  {{ value }}
                </div>

                <div class="row g-30">
                  <div class="col-lg-6 has_fade_anim">
                    <input
                      type="text"
                      name="client_name"
                      class="nb-contact-form-inuut"
                      placeholder="Your name"
                      required=""
                      v-model="insertData.client_name"
                    />
                  </div>
                  <div class="col-lg-6 has_fade_anim">
                    <input
                      name="client_number"
                      type="number"
                      class="nb-contact-form-inuut"
                      placeholder="Your phone"
                      required=""
                      v-model="insertData.client_number"
                    />
                  </div>
                </div>
                <div
                  class="nlv2_newsleatter-right nb-contact-form-button d-flex justify-content-center"
                >
                  <div class="nl__section-button nl-about-button has_fade_anim">
                    <button
                      class="nl-fs-14 nl-fw-500 nl-lh-25 text-uppercase overflow-hidden d-lg-inline-flex position-relative nl-color-black rounded-0 pt-20 pb-20"
                      name="submit"
                      type="submit"
                    >
                      <span class="position-relative z-1">Inquiry Now</span>
                      <span class="nl__btn-hover-style"></span></button
                    ><br /><br />
                    <!-- <a
                      href="#"
                      class="nl-fs-14 nl-fw-500 nl-lh-25 text-uppercase overflow-hidden d-lg-inline-flex position-relative nl-color-black rounded-0 pt-20 pb-20"
                    >
                      <span class="position-relative z-1">Send a messege</span>
                      <span class="nl__btn-hover-style"></span>
                    </a> -->
                  </div>
                </div>
              </form>
            </div>
            <div v-else>
              <div
                class="col-lg-6 offset-lg-1 col-md-12 d-flex align-items-center"
                v-if="residential.residentialDetail"
              >
                <div class="row gx-30 mt-30">
                  <div class="col-md-12">
                    <div
                      class="nl__hero-customer-info pt-30 pr-100 pb-30 pl-100 nl-bg-color-brown nl-border-radius-5 has_fade_anim"
                    >
                      <p class="text-white">
                        <img
                          src="/images/Maniraj-logo.jpg"
                          alt=""
                          height="100"
                          width="100"
                          style="border-radius: 50px"
                        />
                      </p>
                      <h5
                        class="nl-color-black nl-fs-20 text-uppercase nl-font-heading has_char_anim"
                      >
                        Maniraj Properties
                      </h5>
                      <div
                        class="nl__hero-button-wrap mt-30 d-flex align-items-center justify-content-between"
                      >
                        <p
                          class="text-white nl-fs-14 nl-fw-300 nl-lh-25 text-uppercase"
                        >
                          Download E-Brochure&nbsp;
                        </p>
                        <a
                          :href="residential.residentialDetail.brochure"
                          target="_blank"
                          class="nl__header-btn d-flex align-items-center"
                        >
                          <i class="nl-icon nl-icon-angle-down text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      insertData: {
        client_name: "",
        client_number: "",
        residential_id: this.$route.params.id,
      },
      formSubmitted: false,
      isError: false,
      errorMessage: "",
      errors: {},
      residential: {},
      residential_show: this.$route.params.id,
    };
  },
  mounted() {},
  created() {
    this.fetchDataResidential();
  },
  methods: {
    resetValues() {
      this.insertData.client_name = "";
      this.insertData.client_number = "";
    },
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
    submitForm() {
      api()
        .post("/residential-inquiry-store", this.insertData)
        .then((res) => {
          if (res.data.success) {
            alert("Thank you for the information.");
            this.resetValues();
            this.formSubmitted = true;
          } else {
            this.$toast.error(res.data.message);
            this.errors = res.data.data;
            this.errorMessage = res.data.message;
            this.isError = true;
          }
          this.isSubmit = false;
        })
        .catch((e) => {
          this.isError = true;
        });
    },
  },
};
</script>
<style scoped>
.responsive-image-container {
  width: 100%;
  max-width: 1200px; /* max width for larger screens */
  margin: 0 auto; /* center the image container */
}

.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .responsive-image-container {
    padding: 0 15px; /* padding for smaller screens */
  }
}
</style>
