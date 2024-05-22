<template>
  <!--Bredcrumb menu start-->

  <section class="nlv2_bredcrumb nl-bg1 pt-140 pb-140 nl-bg-color-black">
    <div class="nlv2_bredcrumb_wrapper">
      <div class="container">
        <div class="nlv2_bredcrumb_wrapper_container">
          <h2
            class="nl-fs-48 nl-lh-62 nl-color-white nl-font-heading text-center nl-font-body pb-15 has_fade_anim"
          >
            About Us
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
            <span class="">About Us</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Bredcrumb menu end-->

  <!-- About Us Start -->
  <section
    class="nl__about-us-section nl-bg-color-gray-100 nl-section-pt nl-section-pb overflow nl-sm-overflow-hidden"
  >
    <div class="container container-1290">
      <div class="row">
        <div class="col-lg-5 pe-lg-0">
          <div class="nl__about-banner-img">
            <div
              class="nl__about-banner-img-sub image-hover has_fade_anim"
              v-if="aboutUs.image"
            >
              <img :src="aboutUs.image" alt="" />
            </div>
          </div>
        </div>
        <div
          class="col-12 col-lg-1 col-xl-1 col-xxl-1 col-md-12 col-sm-12 d-none d-lg-block"
        ></div>
        <div class="col-lg-6 pt-80 pt-lg-0 ps-lg-0">
          <div class="nl__section-subtitle">
            <h5
              class="nl-color-brown nl-fs-14 nl-fw-500 nl-lh-19 nl-ls-1 text-uppercase nl-font-body has_fade_anim"
            >
              About Us
            </h5>
          </div>
          <div
            class="nl__section-title mt-20 mb-20 has_fade_anim"
            v-if="aboutUs.title"
          >
            <h2 class="nl-fs-48 nl-lh-62 nl-color-black has_fade_anim">
              {{ aboutUs.title }}
            </h2>
          </div>
          <div class="nl__section-description" v-if="aboutUs.description">
            <p
              v-if="aboutUs"
              class="nl-color-gray-800 has_fade_anim"
              v-html="aboutUs.description"
            ></p>
          </div>
          <div class="nl__about-features-wrap mt-45">
            <ul class="list-unstyled">
              <li
                class="nl-color-black nl-font-heading nl-fs-18 nl-lh-24 has_fade_anim"
              >
                <span class="nl-color-brown mr-10"
                  ><i class="nl-icon nl-icon-circle-check"></i
                ></span>
                Trust our team of dedicated real estate experts.
              </li>
              <li
                class="nl-color-black nl-font-heading nl-fs-18 nl-lh-24 has_fade_anim"
              >
                <span class="nl-color-brown mr-10"
                  ><i class="nl-icon nl-icon-circle-check"></i
                ></span>
                Find your perfect match with personalized solutions.
              </li>
              <li
                class="nl-color-black nl-font-heading nl-fs-18 nl-lh-24 has_fade_anim"
              >
                <span class="nl-color-brown mr-10"
                  ><i class="nl-icon nl-icon-circle-check"></i
                ></span>
                Experience honesty and clarity throughout.
              </li>
              <li
                class="nl-color-black nl-font-heading nl-fs-18 nl-lh-24 has_fade_anim"
              >
                <span class="nl-color-brown mr-10"
                  ><i class="nl-icon nl-icon-circle-check"></i
                ></span>
                Count on us for outstanding support.
              </li>
              <li
                class="nl-color-black nl-font-heading nl-fs-18 nl-lh-24 has_fade_anim"
              >
                <span class="nl-color-brown mr-10"
                  ><i class="nl-icon nl-icon-circle-check"></i
                ></span>
                Your goals are our focus.
              </li>
            </ul>
          </div>
          <div class="nl__section-button mt-45 nl__button-brown has_fade_anim">
            <a
              href="/contact"
              class="nl-color-black nl-fs-14 nl-fw-500 nl-lh-25 text-uppercase overflow-hidden d-inline-flex position-relative"
            >
              <span class="position-relative z-1">Contact US</span>
              <span class="nl__btn-hover-style"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Us End -->

  <!-- Countdown Start-->
  <div
    class="nl__countdown-section nl-bg-color-gray-100 nl-section-pt nl-section-pb"
  >
    <div class="container container-1290">
      <div class="nl__counter-wrap d-flex flex-wrap">
        <div class="nl__counter-item">
          <div
            class="nl__counter-number d-flex align-items-center nl-color-brown nl-font-heading nl-fs-70 nl-lh-82 nl-font-heading"
            v-if="aboutUs.hand_of_experience"
          >
            <span class="odometer" data-count="250">{{
              aboutUs.hand_of_experience
            }}</span>
            <span class="suffix">+</span>
          </div>
          <p class="nl__counter-title nl-color-gray-800">Hand Of Experience</p>
        </div>
        <div class="nl__counter-item">
          <div
            class="nl__counter-number d-flex align-items-center nl-color-brown nl-font-heading nl-fs-70 nl-lh-82 nl-font-heading"
            v-if="aboutUs.million_square_feet"
          >
            <span class="odometer" data-count="250">{{
              aboutUs.million_square_feet
            }}</span>
            <span class="suffix">+</span>
          </div>
          <p class="nl__counter-title nl-color-gray-800">Million Square Feet</p>
        </div>
        <div class="nl__counter-item">
          <div
            class="nl__counter-number d-flex align-items-center nl-color-brown nl-font-heading nl-fs-70 nl-lh-82 nl-font-heading"
            v-if="aboutUs.units"
          >
            <span class="odometer" data-count="250">{{ aboutUs.units }}</span>
            <span class="suffix">+</span>
          </div>
          <p class="nl__counter-title nl-color-gray-800">Units</p>
        </div>
      </div>
      <br /><br />
      <div class="nl__counter-wrap d-flex flex-wrap">
        <div class="nl__counter-item">
          <div
            class="nl__counter-number d-flex align-items-center nl-color-brown nl-font-heading nl-fs-70 nl-lh-82 nl-font-heading"
            v-if="aboutUs.residential_property"
          >
            <span class="odometer" data-count="250">{{
              aboutUs.residential_property
            }}</span>
            <span class="suffix">+</span>
          </div>
          <p class="nl__counter-title nl-color-gray-800">
            Residential Property
          </p>
        </div>
        <div class="nl__counter-item">
          <div
            class="nl__counter-number d-flex align-items-center nl-color-brown nl-font-heading nl-fs-70 nl-lh-82 nl-font-heading"
            v-if="aboutUs.commercial_property"
          >
            <span class="odometer" data-count="250">{{
              aboutUs.commercial_property
            }}</span>
            <span class="suffix">+</span>
          </div>
          <p class="nl__counter-title nl-color-gray-800">Commercial Property</p>
        </div>
        <div class="nl__counter-item">
          <div
            class="nl__counter-number d-flex align-items-center nl-color-brown nl-font-heading nl-fs-70 nl-lh-82 nl-font-heading"
            v-if="aboutUs.plots"
          >
            <span class="odometer" data-count="250">{{ aboutUs.plots }}</span>
            <span class="suffix">+</span>
          </div>
          <p class="nl__counter-title nl-color-gray-800">Plots</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Countdown End-->

  <!-- Testimonial Start -->
  <!-- <div class="nl_testimonial nl-bg-color-gray-100 nl-section-pb">
    <div class="nl_testimonial_wrapper">
      <div class="container container-1290">
        <div class="nl_testimonial_wrapper_container position-relative">
          <div class="nl_testimonial_top">
            <div class="row">
              <div class="col-lg-6">
                <div class="nl_testimonial_top_content">
                  <p
                    class="nl-fs-14 nl-font-body nl-lh-19 text-uppercase nl-color-brown nl-fw-500 nl-ls-1 pb-20 has_fade_anim"
                  >
                    Clients Testimonial
                  </p>
                  <h2
                    class="nl-fs-48 nl-font-heading nl-lh-62 nl-color-black has_fade_anim"
                  >
                    Building communities through real estate
                  </h2>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="nl-testimonial-pagination nl-testimonial-pagination-main d-none d-sm-inline-flex"
                >
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="nl_testimonial_slider">
            <div class="swiper nlv2_testimonial_slide2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="nlv2_testimonial_slide_item pt-35 has_fade_anim">
                    <div class="nlv2_testimonial_slide_item_top">
                      <div class="nlv2_testimonial_slide_item_top_img">
                        <img src="/images/testimonial/client1.png" alt="" />
                      </div>
                      <div
                        class="nlv2_testimonial_slide_item_top d-flex align-items-center gap-4 justify-content-between pt-20"
                      >
                        <div class="nlv2_testimonial_slide_item_top_review">
                          <p
                            class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black nl-ls-21 text-center text-lg-start text-md-start mb-15"
                          >
                            Jane Cooper
                          </p>
                          <div class="nl-review">
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                          </div>
                        </div>
                        <div class="nlv2_testimonial_quote_main">
                          <i
                            class="nl-icon nl-icon-quote nl-fs-96 nlv2_testimonial_quote"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div class="nlv2_testimonial_slide_item_buttom pt-20">
                      <p
                        class="nl-fs-18 nl-font-body nl-lh-30 nl-color-black fw-light"
                      >
                        Et nunc purus purus egestas. Nisi ultrices morbi dui
                        placerat nisiy enim Et nunc purus purus egestas. Nisi
                        ultrices morbi dui placerat nisi enim
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="nlv2_testimonial_slide_item pt-35 has_fade_anim">
                    <div class="nlv2_testimonial_slide_item_top">
                      <div class="nlv2_testimonial_slide_item_top_img">
                        <img src="/images/testimonial/client4.png" alt="" />
                      </div>
                      <div
                        class="nlv2_testimonial_slide_item_top d-flex align-items-center gap-4 justify-content-between pt-20"
                      >
                        <div class="nlv2_testimonial_slide_item_top_review">
                          <p
                            class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black nl-ls-21 text-center text-lg-start text-md-start mb-15"
                          >
                            Jane Cooper
                          </p>
                          <div class="nl-review">
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                          </div>
                        </div>
                        <div class="nlv2_testimonial_quote_main">
                          <i
                            class="nl-icon nl-icon-quote nl-fs-96 nlv2_testimonial_quote"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div class="nlv2_testimonial_slide_item_buttom pt-20">
                      <p
                        class="nl-fs-18 nl-font-body nl-lh-30 nl-color-black fw-light"
                      >
                        Et nunc purus purus egestas. Nisi ultrices morbi dui
                        placerat nisiy enim Et nunc purus purus egestas. Nisi
                        ultrices morbi dui placerat nisi enim
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="nlv2_testimonial_slide_item pt-35 has_fade_anim">
                    <div class="nlv2_testimonial_slide_item_top">
                      <div class="nlv2_testimonial_slide_item_top_img">
                        <img src="/images/testimonial/client1.png" alt="" />
                      </div>
                      <div
                        class="nlv2_testimonial_slide_item_top d-flex align-items-center gap-4 justify-content-between pt-20"
                      >
                        <div class="nlv2_testimonial_slide_item_top_review">
                          <p
                            class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black nl-ls-21 text-center text-lg-start text-md-start mb-15"
                          >
                            Jane Cooper
                          </p>
                          <div class="nl-review">
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                          </div>
                        </div>
                        <div class="nlv2_testimonial_quote_main">
                          <i
                            class="nl-icon nl-icon-quote nl-fs-96 nlv2_testimonial_quote"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div class="nlv2_testimonial_slide_item_buttom pt-20">
                      <p
                        class="nl-fs-18 nl-font-body nl-lh-30 nl-color-black fw-light"
                      >
                        Et nunc purus purus egestas. Nisi ultrices morbi dui
                        placerat nisiy enim Et nunc purus purus egestas. Nisi
                        ultrices morbi dui placerat nisi enim
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="nlv2_testimonial_slide_item pt-35 has_fade_anim">
                    <div class="nlv2_testimonial_slide_item_top">
                      <div class="nlv2_testimonial_slide_item_top_img">
                        <img src="/images/testimonial/client5.png" alt="" />
                      </div>
                      <div
                        class="nlv2_testimonial_slide_item_top d-flex align-items-center gap-4 justify-content-between pt-20"
                      >
                        <div class="nlv2_testimonial_slide_item_top_review">
                          <p
                            class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black nl-ls-21 text-center text-lg-start text-md-start mb-15"
                          >
                            Jane Cooper
                          </p>
                          <div class="nl-review">
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                          </div>
                        </div>
                        <div class="nlv2_testimonial_quote_main">
                          <i
                            class="nl-icon nl-icon-quote nl-fs-96 nlv2_testimonial_quote"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div class="nlv2_testimonial_slide_item_buttom pt-20">
                      <p
                        class="nl-fs-18 nl-font-body nl-lh-30 nl-color-black fw-light"
                      >
                        Et nunc purus purus egestas. Nisi ultrices morbi dui
                        placerat nisiy enim Et nunc purus purus egestas. Nisi
                        ultrices morbi dui placerat nisi enim
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="nlv2_testimonial_slide_item pt-35 has_fade_anim">
                    <div class="nlv2_testimonial_slide_item_top">
                      <div class="nlv2_testimonial_slide_item_top_img">
                        <img src="/images/testimonial/client5.png" alt="" />
                      </div>
                      <div
                        class="nlv2_testimonial_slide_item_top d-flex align-items-center gap-4 justify-content-between pt-20"
                      >
                        <div class="nlv2_testimonial_slide_item_top_review">
                          <p
                            class="nl-fs-22 nl-font-heading nl-lh-26 nl-color-black nl-ls-21 text-center text-lg-start text-md-start mb-15"
                          >
                            Jane Cooper
                          </p>
                          <div class="nl-review">
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                            <span
                              ><i class="nl-icon nl-icon-star nl-colo"></i
                            ></span>
                          </div>
                        </div>
                        <div class="nlv2_testimonial_quote_main">
                          <i
                            class="nl-icon nl-icon-quote nl-fs-96 nlv2_testimonial_quote"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div class="nlv2_testimonial_slide_item_buttom pt-20">
                      <p
                        class="nl-fs-18 nl-font-body nl-lh-30 nl-color-black fw-light"
                      >
                        Et nunc purus purus egestas. Nisi ultrices morbi dui
                        placerat nisiy enim Et nunc purus purus egestas. Nisi
                        ultrices morbi dui placerat nisi enim
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- Testimonial End -->

  <!-- Property Details Start-->
  <section
    class="nl__property-details-section nl-bg-color-gray-100 nl-section-pb"
  >
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
                    vif="item.role"
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

  <!-- Newsleater Section Start -->

  <div class="nlv2_newsleatter nl-bg-color-gray-100 nl-section-pb">
    <div class="nlv2_newsleatter_wrapper">
      <div class="container container-1290">
        <div
          class="nlv2_newsleatter_wrapper_container nl-bg-color-white nl-border-radius-5 overflow-hidden has_fade_anim"
        >
          <div class="row">
            <div class="col-12 col-lg-4 col-xl-4 col-xxl-5 col-md-12 col-sm-12">
              <div class="nlv2_newsleatter-left position-relative text-end">
                <img src="/images/2.png" alt="" class="pt-50 has_fade_anim" />
              </div>
            </div>
            <div
              class="col-12 col-lg-2 col-xl-2 col-xxl-2 col-md-12 col-sm-12 d-none d-lg-block"
            ></div>
            <div
              class="col-12 col-lg-5 col-xl-5 col-xxl-5 col-md-12 col-sm-12 align-self-center"
            >
              <div class="nlv2_newsleatter-right pl-20 pr-20 pb-20">
                <h2
                  class="nl-fs-48 nl-font-heading nl-lh-62 nl-color-black m-auto text-center text-lg-start pb-15 text-md-start has_fade_anim"
                >
                  Homes Real estate real potential
                </h2>
                <p
                  class="nl-fs-18 nl-font-body nl-lh-30 nl-color-gray-800 pb-1 has_fade_anim"
                >
                  Homes Real Estate unlocks the real potential of every
                  property. With our dedicated team and personalized approach,
                  we transform spaces into opportunities, guiding you towards
                  your ideal investment or dream home.
                </p>
                <div class="row pt-25">
                  <div
                    class="col-12 col-lg-7 col-xl-7 col-xxl-7 col-md-6 col-sm-12"
                  >
                    <!-- <div class="form-group">
                      <input
                        type="text"
                        class="form-control nlv2_input pl-20"
                        placeholder="Email Address"
                        id="Email"
                      />
                    </div> -->
                  </div>
                  <div
                    class="col-12 col-lg-5 col-xl-5 col-xxl-5 col-md-6 col-sm-12 mt-3 mt-lg-0"
                  >
                    <div
                      class="nl__section-button nl-about-button has_fade_anim"
                    >
                      <a
                        href="/contact"
                        class="nl-fs-14 nl-fw-500 nl-lh-25 text-uppercase overflow-hidden d-lg-inline-flex position-relative nl-color-black"
                      >
                        <span class="position-relative z-1">Contact Us</span>
                        <span class="nl__btn-hover-style"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-lg-1 col-xl-1 col-xxl-1 col-md-12 col-sm-12 d-none d-lg-block"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutUs: {},
      team: {},
    };
  },
  mounted() {
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
      "/js/count.js",
      "/js/ScrollToPlugin.min.js",
      "/js/script.js",
      // Uncomment and include if needed
      "/js/ThemeAnim.js",
      // "https://some-website.com/stuff.js"
    ];

    function loadScriptSequentially(index) {
      if (index >= scripts.length) {
        return; // All scripts loaded
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = scripts[index];
      script.defer = true;

      script.onload = () => {
        // Load the next script once the current script is successfully loaded
        loadScriptSequentially(index + 1);
      };

      script.onerror = () => {
        console.error(`Failed to load script: ${scripts[index]}`);
        // Optionally, you can decide to continue loading the next script even if one fails
        loadScriptSequentially(index + 1);
      };

      document.body.appendChild(script);
    }

    // Start loading the first script
    loadScriptSequentially(0);
  },
  created() {
    this.fetchDataAboutUs();
    this.fetchDataTeam();
    // this.fetchDataAboutUs();
    // this.fetchDataKeyFeature();
    // this.fetchDataLocatedShowroom();
  },
  methods: {
    fetchDataAboutUs() {
      api()
        .get("user-side/show-about-us")
        .then((res) => {
          if (res.data.success) {
            this.aboutUs = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
