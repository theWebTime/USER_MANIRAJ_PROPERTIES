<template>
  <!--================Breadcrumb Area =================-->
  <section
    class="breadcrumb_area"
    style="background: url(/img/custom/productPageBanner.jpg)"
  >
    <div class="container">
      <div class="breadcrumb_inner">
        <h3>Product-Details</h3>
        <div class="link">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/product">Product</nuxt-link>
          <a to="#"> Product Details </a>
        </div>
      </div>
    </div>
  </section>
  <!--================End Breadcrumb Area =================-->

  <!--================Product Details Area =================-->
  <section class="product_details_area p_100" v-if="productDetail">
    <div class="container">
      <div class="row product_details_inner">
        <div class="col-lg-8">
          <div class="product_details_left">
            <div class="price_title d-flex justify-content-between">
              <div class="left">
                <h3>
                  {{ productDetail.product.model_name }}
                </h3>
              </div>
              <div class="right">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  v-if="productDetail.product.product_view"
                >
                  360 View
                </button>
                <!-- Modal -->
                <div
                  class="modal fade bd-example-modal-lg"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  >
                    <div class="modal-content">
                      <iframe
                        width="700px"
                        height="700px"
                        :src="productDetail.product.product_view"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_d_slider">
              <br />
              <Carousel
                id="gallery"
                :items-to-show="1"
                :wrap-around="false"
                v-model="currentSlide"
              >
                <Slide v-for="slide in productDetail.productImage" :key="slide">
                  <div class="carousel__item">
                    <img :src="slide.image" height="500" width="500" />
                  </div>
                </Slide>
              </Carousel>

              <Carousel
                id="thumbnails"
                :items-to-show="4"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
              >
                <Slide v-for="slide in productDetail.productImage" :key="slide">
                  <div class="carousel__item" @click="slideTo(slide - 1)">
                    <img :src="slide.image" height="50" width="50" />
                  </div>
                </Slide>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="product_list_right">
            <ul class="nav flex-column">
              <li v-if="productDetail.product.ept_traction_motor_type">
                <a href="#"
                  ><i class="icon-engine"></i>Motor
                  <span>{{
                    productDetail.product.ept_traction_motor_type
                  }}</span></a
                >
              </li>
              <li v-if="productDetail.product.c_front_tyre_size">
                <a href="#"
                  ><i class="icon-wheel"></i>Tyre Size
                  <span>{{ productDetail.product.c_front_tyre_size }}</span></a
                >
              </li>
              <!-- <li
                v-if="productDetail.product.loading_capacity"
              >
                <a href="#"
                  ><i class="icon-engine"></i>Loading Capacity
                  <span>{{ productDetail.product.loading_capacity }}</span></a
                >
              </li> -->
              <li v-if="productDetail.product.c_front_break_size_type">
                <a href="#"
                  ><i class="icon-engine"></i>Break Tyre
                  <span>{{ productDetail.product.c_front_break_size_type }}</span></a
                >
              </li>
              <li v-if="productDetail.product.b_type">
                <a href="#"
                  ><i class="icon-battery"></i>Battery Type
                  <span>{{ productDetail.product.b_type }}</span></a
                >
              </li>
              <li v-if="productDetail.product.charge_time">
                <a href="#"
                  ><i class="icon-clock"></i>Charge Time
                  <span>{{ productDetail.product.charge_time }}</span></a
                >
              </li>
              <li v-if="productDetail.product.ch_charging_duration">
                <a href="#"
                  ><i class="icon-assembly"></i>Fast Charging
                  <span>{{ productDetail.product.ch_charging_duration }}</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="product_overview_text"
        v-if="productDetail.product.over_view_details"
      >
        <h4>Overview</h4>
        <p>
          {{ productDetail.product.over_view_details }}
        </p>
      </div>
      <div class="specification_area">
        <div class="single_b_title">
          <h3>Specification</h3>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="left_spec">
              <div class="nav nav-tabs flex-column" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-vehicle-tab"
                  data-toggle="tab"
                  href="#nav-vehicle"
                  role="tab"
                  aria-controls="nav-vehicle"
                  aria-selected="true"
                  >VEHICLE</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-chassis-tab"
                  data-toggle="tab"
                  href="#nav-chassis"
                  role="tab"
                  aria-controls="nav-chassis"
                  aria-selected="false"
                  >CHASSIS</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-ev-power-train-tab"
                  data-toggle="tab"
                  href="#nav-ev-power-train"
                  role="tab"
                  aria-controls="nav-ev-power-train"
                  aria-selected="false"
                  >EV POWER TRAIN</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-battery-tab"
                  data-toggle="tab"
                  href="#nav-battery"
                  role="tab"
                  aria-controls="nav-battery"
                  aria-selected="false"
                  >BATTERY</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-charging-tab"
                  data-toggle="tab"
                  href="#nav-charging"
                  role="tab"
                  aria-controls="nav-charging"
                  aria-selected="false"
                  >CHARGING</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-light-tab"
                  data-toggle="tab"
                  href="#nav-light"
                  role="tab"
                  aria-controls="nav-light"
                  aria-selected="false"
                  >LIGHTING</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-cluster-tab"
                  data-toggle="tab"
                  href="#nav-cluster"
                  role="tab"
                  aria-controls="nav-cluster"
                  aria-selected="false"
                  >CLUSTER</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-connectivity-tab"
                  data-toggle="tab"
                  href="#nav-connectivity"
                  role="tab"
                  aria-controls="nav-connectivity"
                  aria-selected="false"
                  >CONNECTIVITY</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-cluster-fet-tab"
                  data-toggle="tab"
                  href="#nav-cluster-fet"
                  role="tab"
                  aria-controls="nav-cluster-fet"
                  aria-selected="false"
                  >CLUSTER-FEATURES</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-telematics-tab"
                  data-toggle="tab"
                  href="#nav-telematics"
                  role="tab"
                  aria-controls="nav-telematics"
                  aria-selected="false"
                  >TELEMATICS - FEATURES</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-feature-tab"
                  data-toggle="tab"
                  href="#nav-feature"
                  role="tab"
                  aria-controls="nav-feature"
                  aria-selected="false"
                  >Other FEATURES</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-contact-tab5"
                  data-toggle="tab"
                  href="#nav-contact5"
                  role="tab"
                  aria-controls="nav-contact5"
                  aria-selected="false"
                  >Product Color</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="right_spec">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-vehicle"
                  role="tabpanel"
                  aria-labelledby="nav-vehicle-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>VEHICLE</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.v_top_speed">
                        VEHICLE TOP SPEED
                        <span>{{ productDetail.product.v_top_speed }}</span>
                      </li>
                      <li v-if="productDetail.product.v_parking_assist">
                        PARKING ASSIST
                        <span>{{
                          productDetail.product.v_parking_assist
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.v_acceleration">
                        ACCELERATION
                        <span>{{ productDetail.product.v_acceleration }}</span>
                      </li>
                      <li v-if="productDetail.product.v_gradability">
                        GRADABILITY
                        <span>{{ productDetail.product.v_gradability }}</span>
                      </li>
                      <li v-if="productDetail.product.v_range_per_charge">
                        RANGE PER CHARGE
                        <span>{{ productDetail.product.v_range_per_charge }}</span>
                      </li>
                      <li v-if="productDetail.product.v_weight">
                        WEIGHT
                        <span>{{ productDetail.product.v_weight }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-chassis"
                  role="tabpanel"
                  aria-labelledby="nav-chassis-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>CHASSIS</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.c_frame_type">
                        CHASSIS FRAME TYPE
                        <span> {{ productDetail.product.c_frame_type }}</span>
                      </li>
                      <li v-if="productDetail.product.c_front_tyre_size">
                        FRONT TYRE SIZE
                        <span> {{ productDetail.product.c_front_tyre_size }}</span>
                      </li>
                      <li v-if="productDetail.product.c_rear_tyre_size">
                        REAR TYRE SIZE
                        <span> {{ productDetail.product.c_rear_tyre_size }}</span>
                      </li>
                      <li v-if="productDetail.product.c_tyre_type">
                        TYRE TYPE
                        <span> {{ productDetail.product.c_tyre_type }}</span>
                      </li>
                      <li v-if="productDetail.product.c_front_suspension">
                        FRONT SUSPENSION
                        <span> {{ productDetail.product.c_front_suspension }}</span>
                      </li>
                      <li v-if="productDetail.product.c_rear_suspension">
                        REAR SUSPENSION
                        <span> {{ productDetail.product.c_rear_suspension }}</span>
                      </li>
                      <li v-if="productDetail.product.c_overall_dimension">
                        OVERALL DIMENSION, L X B X H
                        <span> {{ productDetail.product.c_overall_dimension }}</span>
                      </li>
                      <li v-if="productDetail.product.c_ground_clearance">
                        GROUND CLEARANCE
                        <span> {{ productDetail.product.c_ground_clearance }}</span>
                      </li>
                      <li v-if="productDetail.product.c_seat_height">
                        SEAT HEIGHT
                        <span> {{ productDetail.product.c_seat_height }}</span>
                      </li>
                      <li v-if="productDetail.product.c_wheelbase">
                        WHEELBASE
                        <span> {{ productDetail.product.c_wheelbase }}</span>
                      </li>
                      <li v-if="productDetail.product.c_rear_break_size_type">
                        REAR BRAKE; SIZE & TYPE
                        <span> {{ productDetail.product.c_rear_break_size_type }}</span>
                      </li>
                      <li v-if="productDetail.product.c_front_break_size_type">
                        FRONT BRAKE; SIZE 8 TYPE
                        <span> {{ productDetail.product.c_front_break_size_type }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-ev-power-train"
                  role="tabpanel"
                  aria-labelledby="nav-ev-power-train-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>EV POWER TRAIN</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.ept_traction_motor_type">
                        EV POWER  TRAIN TRACTION MOTOR TYPE
                        <span> {{ productDetail.product.ept_traction_motor_type }}</span>
                      </li>
                      <li v-if="productDetail.product.ept_peak_power">
                        PEAK POWER
                        <span> {{ productDetail.product.ept_peak_power }}</span>
                      </li>
                      <li v-if="productDetail.product.ept_rated_power">
                        RATED POWER
                        <span> {{ productDetail.product.ept_rated_power }}</span>
                      </li>
                      <li v-if="productDetail.product.ept_peak_torque">
                        PEAK TORQUE
                        <span> {{ productDetail.product.ept_peak_torque }}</span>
                      </li>
                      <li v-if="productDetail.product.ept_rated_torque">
                        RATED TORQUE
                        <span> {{ productDetail.product.ept_rated_torque }}</span>
                      </li>
                      <li v-if="productDetail.product.ept_water_dust_resistance">
                        WATER & DUST RESISTANCE
                        <span> {{ productDetail.product.ept_water_dust_resistance }}</span>
                      </li>
                      <li v-if="productDetail.product.ept_regenerative_braking">
                        REGENERATIVE BRAKING
                        <span> {{ productDetail.product.ept_regenerative_braking }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-battery"
                  role="tabpanel"
                  aria-labelledby="nav-battery-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>BATTERY</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.b_type">
                        BATTERY TYPE
                        <span>{{ productDetail.product.b_type }}</span>
                      </li>
                      <li v-if="productDetail.product.b_capacity">
                        CAPACITY
                        <span>{{ productDetail.product.b_capacity }}</span>
                      </li>
                      <li v-if="productDetail.product.b_rated_voltage">
                        RATED VOLTAGE
                        <span>{{ productDetail.product.b_rated_voltage }}</span>
                      </li>
                      <li v-if="productDetail.product.b_safety">
                        SAFETY
                        <span>{{ productDetail.product.b_safety }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-charging"
                  role="tabpanel"
                  aria-labelledby="nav-charging-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>CHARGING</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.ch_plug_charger_type">
                        CHARGING PLUG-IN CHARGER TYPE
                        <span>{{ productDetail.product.ch_plug_charger_type }}</span>
                      </li>
                      <li v-if="productDetail.product.ch_spike_protection">
                        SPIKE PROTECTION
                        <span>{{ productDetail.product.ch_spike_protection }}</span>
                      </li>
                      <li v-if="productDetail.product.ch_charging_duration">
                        CHARGING DURATION - 0 TO 8O% SOC
                        <span>{{ productDetail.product.ch_charging_duration }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-light"
                  role="tabpanel"
                  aria-labelledby="nav-light-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>LIGHTING</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.l_headlamp">
                        LIGHTING HEADLAMP
                        <span>{{ productDetail.product.l_headlamp }}</span>
                      </li>
                      <li v-if="productDetail.product.l_taillamp">
                        TAILLAMP
                        <span>{{ productDetail.product.l_taillamp }}</span>
                      </li>
                      <li v-if="productDetail.product.l_number_plate_lamp">
                        NUMBER  PLATE LAMP
                        <span>{{ productDetail.product.l_number_plate_lamp }}</span>
                      </li>
                      <li v-if="productDetail.product.l_signature_position_lamp">
                        SIGNATURE POSITION LAMP
                        <span>{{ productDetail.product.l_signature_position_lamp }}</span>
                      </li>
                      <li v-if="productDetail.product.l_llum_nating_logo">
                        LLUM NATING LOGO
                        <span>{{ productDetail.product.l_llum_nating_logo }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-cluster"
                  role="tabpanel"
                  aria-labelledby="nav-cluster-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>CLUSTER</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.clu_type_size">
                        CLUSTER TYPE & SIZE
                        <span>{{
                          productDetail.product.clu_type_size
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.clu_resolution">
                        RESOLUTION
                        <span>{{
                          productDetail.product.clu_resolution
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.clu_brightness">
                        BRIGHTNESS
                        <span>{{
                          productDetail.product.clu_brightness
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.clu_hmi">
                        HMI
                        <span>{{
                          productDetail.product.clu_hmi
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.clu_day_night_mode">
                        DAY / NIGHT MODE
                        <span>{{
                          productDetail.product.clu_day_night_mode
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-connectivity"
                  role="tabpanel"
                  aria-labelledby="nav-connectivity-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>CONNECTIVITY</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.conn_bluetooth_connectivity">
                        CONNECTIVITY BLUETOOTH CONNECTIVITY
                        <span>{{
                          productDetail.product.conn_bluetooth_connectivity
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.conn_gsm_connectivity">
                        GSM CONNECTIVITY
                        <span>{{
                          productDetail.product.conn_gsm_connectivity
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.conn_ota">
                        OTA
                        <span>{{
                          productDetail.product.conn_ota
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-cluster-fet"
                  role="tabpanel"
                  aria-labelledby="nav-cluster-fet-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>CLUSTER-FEATURES</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.cf_turn_by_turn_navigation">
                        CLUSTER-FEATURES TURN-BY-TURN NAVIGATION
                        <span>{{
                          productDetail.product.cf_turn_by_turn_navigation
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.cf_incoming_call_alert">
                        INCOMING CALL ALERT
                        <span>{{
                          productDetail.product.cf_incoming_call_alert
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.cf_side_stand_indication">
                        SIDE STAND INDICATION
                        <span>{{
                          productDetail.product.cf_side_stand_indication
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.cf_bl_lb_indicator">
                        BATTERY LEVEL & LOW BATTERY INDICATOR
                        <span>{{
                          productDetail.product.cf_bl_lb_indicator
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.cf_distance_to_empty">
                        DISTANCE TO EMPTY (DTE)
                        <span>{{
                          productDetail.product.cf_distance_to_empty
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.cf_park_assist_reverse_assist_indicator">
                        PARK ASSIST /  REVERSE ASSIST INDICATOR
                        <span>{{
                          productDetail.product.cf_park_assist_reverse_assist_indicator
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.cf_music_control">
                        MUSIC CONTROL
                        <span>{{
                          productDetail.product.cf_music_control ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.cf_incognito_mode">
                        INCOGNITO MODE
                        <span>{{
                          productDetail.product.cf_incognito_mode ? "YES" : "NO"
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-telematics"
                  role="tabpanel"
                  aria-labelledby="nav-telematics-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>TELEMATICS - FEATURES</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.tf_geo_fencing">
                        TELEMATICS-FEATURES GEO FENCING
                        <span>{{
                          productDetail.product.tf_geo_fencing
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.tf_anti_theft_alert">
                        ANTI-THEFT ALERT
                        <span>{{
                          productDetail.product.tf_anti_theft_alert
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.tf_live_location_status">
                        LIVE LOCATION STATUS
                        <span>{{
                          productDetail.product.tf_live_location_status
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-feature"
                  role="tabpanel"
                  aria-labelledby="nav-feature-tab"
                >
                  <div class="spec_information nice_scroll">
                    <h4>Other FEATURES</h4>
                    <ul class="nav flex-column">
                      <li v-if="productDetail.product.f_flip_key_with_led_light">
                        FEATURES FLIP KEY WITH LED LIGHT
                        <span>{{
                          productDetail.product.f_flip_key_with_led_light
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_usb_charger_mobile_charger">
                        USB CHARGER FOR MOBILE CHARGING
                        <span>{{
                          productDetail.product.f_usb_charger_mobile_charger ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_pleasant_horn_tone">
                        PLEASANT HORN TONE
                        <span>{{
                          productDetail.product.f_pleasant_horn_tone
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_parking_brake_lever">
                        PARKING BRAKE LEVER
                        <span>{{
                          productDetail.product.f_parking_brake_lever
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_customer_ride_riding_mode">
                        CUSTOMER  RIDE, RIDING MODES ECO & POW
                        <span>{{
                          productDetail.product.f_customer_ride_riding_mode ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_park_assist_reverse_assist">
                        PARK ASSIST /  REVERSE ASSIST
                        <span>{{
                          productDetail.product.f_park_assist_reverse_assist ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_tft_cluster_size_type">
                        TFT CLUSTER, SIZE & TYPE
                        <span>{{
                          productDetail.product.f_tft_cluster_size_type
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_turn_by_turn_navigation">
                        TURN-BY-TURN  NAVIGATION
                        <span>{{
                          productDetail.product.f_turn_by_turn_navigation ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_battery_level_low_battery_indicator">
                        BATTERY LEVEL AND LOW BATTERY INDICATOR
                        <span>{{
                          productDetail.product.f_battery_level_low_battery_indicator ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_distance_to_empty">
                        DISTANCE TO EMPTY (DTE)
                        <span>{{
                          productDetail.product.f_distance_to_empty ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_side_stand_indication">
                        SIDE STAND INDICATION
                        <span>{{
                          productDetail.product.f_side_stand_indication ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_connected_cluster_via_bluetooth">
                        CONNECTED  CLUSTER  VIA BLUETOOTH  & MOBILE APP
                        <span>{{
                          productDetail.product.f_connected_cluster_via_bluetooth ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_sync_smartphone">
                        SYNC SMARTPHONE  AND RIDE DATA  ACCESS VIA TELEMATICS
                        <span>{{
                          productDetail.product.f_sync_smartphone ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_geo_fencing">
                        GEO FENCING
                        <span>{{
                          productDetail.product.f_geo_fencing ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_alert_theft_alert">
                        ANTI-THEFT ALERT
                        <span>{{
                          productDetail.product.f_alert_theft_alert ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_live_location_status">
                        LIVE LOCATION STATUS
                        <span>{{
                          productDetail.product.f_live_location_status ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_incogn_ito_mode_option">
                        INCOGN ITO MODE OPTION
                        <span>{{
                          productDetail.product.f_incogn_ito_mode_option ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_usb_charger">
                        USB CHARGER
                        <span>{{
                          productDetail.product.f_usb_charger ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_regenerative_braking">
                        REGENERATIVE BRAKING
                        <span>{{
                          productDetail.product.f_regenerative_braking ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_all_led_lamp">
                        ALL LED LAMPS (HL, TSL, BRAKE LAMP, NUMBER PLATE)
                        <span>{{
                          productDetail.product.f_all_led_lamp ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_illuminating_logo">
                        ILLUMINATING LOGO
                        <span>{{
                          productDetail.product.f_illuminating_logo ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_flip_key_with_led">
                        FLIP KEY WITH LED TORCH
                        <span>{{
                          productDetail.product.f_flip_key_with_led ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_plugin_charger">
                        PLUG-IN CHARGER
                        <span>{{
                          productDetail.product.f_plugin_charger
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_charger">
                        CHARGER - WALL MOUNTING BOX OPTION
                        <span>{{
                          productDetail.product.f_charger ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_ble_helmet">
                        BLE HELMET
                        <span>{{
                          productDetail.product.f_ble_helmet ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_hazard_lamp">
                        HAZARD LAMP
                        <span>{{
                          productDetail.product.f_hazard_lamp ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_crash_fall_alert">
                        CRASH & FALL ALERT
                        <span>{{
                          productDetail.product.f_crash_fall_alert ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_rear_shock_absorber">
                        REAR SHOCK ABSORBER
                        <span>{{
                          productDetail.product.f_rear_shock_absorber
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_call_accept">
                        CALL ACCEPT & REJECT THROUGH HMI
                        <span>{{
                          productDetail.product.f_call_accept ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_mobile_app_alert">
                        MOBILE APP ALERTS
                        <span>{{
                          productDetail.product.f_mobile_app_alert ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_service_reminder">
                        SERVICE REMINDER
                        <span>{{
                          productDetail.product.f_service_reminder ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_cluster">
                        CLUSTER THEMES
                        <span>{{
                          productDetail.product.f_cluster
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_document_storage">
                        DOCUMENT STORAGE IN CLUSTER
                        <span>{{
                          productDetail.product.f_document_storage ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_caller_image">
                        CALLER IMAGE DISPLAY ON CLUSTER
                        <span>{{
                          productDetail.product.f_caller_image ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_color">
                        COLOR
                        <span>{{
                          productDetail.product.f_color
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_body_color_mirror">
                        BODY COLOR MIRROR
                        <span>{{
                          productDetail.product.f_body_color_mirror ? "YES" : "NO"
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_utility_space">
                        UTILITY SPACE
                        <span>{{
                          productDetail.product.f_utility_space
                        }}</span>
                      </li>
                      <li v-if="productDetail.product.f_home_fast_charging">
                        HOME FAST-CHARGING OPTION
                        <span>{{
                          productDetail.product.f_home_fast_charging ? "YES" : "NO"
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact5"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab5"
                >
                  <div class="spec_information nice_scroll">
                    <h4>Product Color</h4>
                    <ul class="nav flex-column">
                      <li
                        v-for="(item, index) in productDetail.productColor"
                        :key="index"
                      >
                        {{ index + 1 }}
                        <span
                          :style="{
                            'background-color': item.primary_color_code,
                          }"
                          class="dot"
                        >
                        </span
                        ><span
                          :style="{
                            'background-color': item.secondary_color_code,
                          }"
                          class="dot"
                        ></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Product Details Area =================-->
</template>
<script>
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
  },
  data() {
    return {
      productDetail: "",
      params_id: this.$route.params.id,
      currentSlide: 0,
    };
  },
  created() {
    this.fetchDataProductDetail();
  },
  methods: {
    fetchDataProductDetail() {
      api()
        .get("product-detail-show/" + this.params_id)
        .then((res) => {
          if (res.data.success) {
            this.productDetail = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>
<style>
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-top: 26px;
}
</style>
