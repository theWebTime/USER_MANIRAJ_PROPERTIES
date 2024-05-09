<template>
  <!--Bredcrumb menu start-->

  <section class="nlv2_bredcrumb nl-bg1 pt-140 pb-140 nl-bg-color-black">
    <div class="nlv2_bredcrumb_wrapper">
      <div class="container">
        <div class="nlv2_bredcrumb_wrapper_container">
          <h2
            class="nl-fs-48 nl-lh-62 nl-color-white nl-font-heading text-center nl-font-body pb-15 has_fade_anim"
          >
            Contact Us
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
            <span class="">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Bredcrumb menu end-->
  <!-- Contact Section Start -->

  <section
    class="nlv2_contact nl-bg-color-white nl-mp nl-malls nl-section-pb nl-section-pt"
  >
    <div class="nlv2_contact_wrapper">
      <div class="container container-1290">
        <div class="nlv2_contact_wrapper_container">
          <div class="row g-30">
            <div class="col-lg-4">
              <div
                class="nlv2_contact_adress_main d-flex align-items-center d-flex gap-4 pl-20 pt-40 pr-20 pb-30 mt-10 has_fade_anim"
              >
                <div class="nlv2_contact_adress_icon">
                  <div
                    class="nlv2_contact_adress_img position-relative d-flex align-items-center justify-content-center"
                  >
                    <svg
                      width="98"
                      height="138"
                      viewBox="0 0 98 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M74.4571 136.491C33.329 151.984 -44.541 35.0268 34.3546 5.13206C78.7135 -6.89763 99.7958 6.0011 93.6241 51.3211C87.4524 96.6412 115.585 120.999 74.4571 136.491Z"
                        fill="#F7F4F1"
                      />
                    </svg>
                    <i
                      class="nl-icon nl-icon-location-marker nl-fs-59 nl-color-brown position-absolute"
                    ></i>
                  </div>
                </div>
                <div class="nlv2_contact_adress">
                  <div class="nlv2_contact_adress_content">
                    <h4
                      class="nl-fs-22 nl-color-black nl-font-heading nl-lh-30"
                    >
                      Address
                    </h4>
                    <p class="nl-fs-18 nl-color-gray-800 nl-lh-30 nl-font-body">
                      {{ site.address }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="nlv2_contact_adress_main d-flex align-items-center d-flex gap-4 pl-20 pt-40 pr-20 pb-30 mt-10 has_fade_anim"
              >
                <div class="nlv2_contact_adress_icon">
                  <div
                    class="nlv2_contact_adress_img position-relative d-flex align-items-center justify-content-center"
                  >
                    <svg
                      width="98"
                      height="138"
                      viewBox="0 0 98 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M74.4571 136.491C33.329 151.984 -44.541 35.0268 34.3546 5.13206C78.7135 -6.89763 99.7958 6.0011 93.6241 51.3211C87.4524 96.6412 115.585 120.999 74.4571 136.491Z"
                        fill="#F7F4F1"
                      />
                    </svg>
                    <i
                      class="nl-icon nl-icon-envelop nl-fs-59 nl-color-brown position-absolute"
                    ></i>
                  </div>
                </div>
                <div class="nlv2_contact_adress">
                  <div class="nlv2_contact_adress_content">
                    <h4
                      class="nl-fs-22 nl-color-black nl-font-heading nl-lh-30"
                    >
                      Email Address
                    </h4>
                    <a :href="'mailto:' + site.email1" target="_blank">
                      <p
                        class="nl-fs-18 nl-color-gray-800 nl-lh-30 nl-font-body"
                      >
                        {{ site.email1 }}
                      </p></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="nlv2_contact_adress_main d-flex align-items-center d-flex gap-4 pl-20 pt-40 pr-20 pb-30 mt-10 has_fade_anim"
              >
                <div class="nlv2_contact_adress_icon">
                  <div
                    class="nlv2_contact_adress_img position-relative d-flex align-items-center justify-content-center"
                  >
                    <svg
                      width="98"
                      height="138"
                      viewBox="0 0 98 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M74.4571 136.491C33.329 151.984 -44.541 35.0268 34.3546 5.13206C78.7135 -6.89763 99.7958 6.0011 93.6241 51.3211C87.4524 96.6412 115.585 120.999 74.4571 136.491Z"
                        fill="#F7F4F1"
                      />
                    </svg>
                    <i
                      class="nl-icon nl-icon-call nl-fs-59 nl-color-brown position-absolute"
                    ></i>
                  </div>
                </div>
                <div class="nlv2_contact_adress">
                  <div class="nlv2_contact_adress_content">
                    <h4
                      class="nl-fs-22 nl-color-black nl-font-heading nl-lh-30"
                    >
                      Phone Number
                    </h4>
                    <a :href="'tel:' + site.phone_number1">
                      <p
                        class="nl-fs-18 nl-color-gray-800 nl-lh-30 nl-font-body"
                      >
                        {{ site.phone_number1 }}
                      </p></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="nlv2_contact_from nl-bg-color-white pb-85">
    <div class="nlv2_contact_fromwrapper">
      <div class="container container-1290">
        <div class="nlv2_contact_from_wrapper_container">
          <div class="row">
            <div class="col-lg-12">
              <h2
                class="nl-fs-48 nl-lh-62 nl-color-black text-center has_fade_anim"
              >
                Get in touch with us
              </h2>
              <p
                class="nl-fs-18 nl-lh-30 nl-color-gray-800 text-center has_fade_anim"
              >
                We are here for you! how can we help, We are here for you!
              </p>
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
                <input
                  type="text"
                  name="name"
                  class="nb-contact-form-inuut"
                  placeholder="Your name"
                  required=""
                  v-model="insertData.name"
                />
                <div class="row g-30">
                  <div class="col-lg-6 has_fade_anim">
                    <input
                      type="email"
                      name="email"
                      class="nb-contact-form-inuut"
                      placeholder="Your email"
                      required=""
                      v-model="insertData.email"
                    />
                  </div>
                  <div class="col-lg-6 has_fade_anim">
                    <input
                      name="phone_number"
                      type="number"
                      class="nb-contact-form-inuut"
                      placeholder="Your phone"
                      required=""
                      v-model="insertData.phone_number"
                    />
                  </div>
                </div>
                <textarea
                  name="private_message"
                  class="nb-contact-form-inuut has_fade_anim"
                  id="textarea"
                  cols="30"
                  rows="6"
                  placeholder="Private Message"
                  required=""
                  v-model="insertData.private_message"
                ></textarea>
                <textarea
                  name="message"
                  class="nb-contact-form-inuut has_fade_anim"
                  id="textarea"
                  cols="30"
                  rows="6"
                  placeholder="Messege"
                  required=""
                  v-model="insertData.message"
                ></textarea>
                <div
                  class="nlv2_newsleatter-right nb-contact-form-button d-flex justify-content-center"
                >
                  <div class="nl__section-button nl-about-button has_fade_anim">
                    <button
                      class="nl-fs-14 nl-fw-500 nl-lh-25 text-uppercase overflow-hidden d-lg-inline-flex position-relative nl-color-black rounded-0 pt-20 pb-20"
                      name="submit"
                      type="submit"
                    >
                      <span class="position-relative z-1">Send a messege</span>
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
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Section End -->
</template>
<script>
export default {
  components: {},
  data() {
    return {
      insertData: {
        name: "",
        email: "",
        message: "",
        private_message: "",
        phone_number: "",
      },
      isError: false,
      errorMessage: "",
      errors: {},
      site: {},
    };
  },
  mounted() {},
  created() {
    this.fetchDataSite();
  },
  methods: {
    resetValues() {
      this.insertData.name = "";
      this.insertData.email = "";
      this.insertData.message = "";
      this.insertData.private_message = "";
      this.insertData.phone_number = "";
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
    submitForm() {
      api()
        .post("/contact-us-store", this.insertData)
        .then((res) => {
          if (res.data.success) {
            this.resetValues();
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
