<template>
  <!--================Breadcrumb Area =================-->
  <section
    class="breadcrumb_area"
    style="background: url(img/custom/productPageBanner.jpg);"
  >
    <div class="container">
      <div class="breadcrumb_inner">
        <h3>Product</h3>
        <div class="link">
          <a href="/">Home</a>
          <a href="#">Product</a>
        </div>
      </div>
    </div>
  </section>
  <!--================End Breadcrumb Area =================-->

  <!--================Product Area =================-->
  <section class="main_product_area p_100">
    <div class="container">
      <div class="row main_product_inner flex-row-reverse">
        <div class="col-lg-12">
          <div class="product_list_inner">
            <div
              class="media product_list_item wow animated fadeInUp"
              data-wow-delay="0.2s"
              v-for="(item, index) in product"
              :key="index"
            >
              <div class="d-flex">
                <nuxt-link :to="'/product/' + item.id"
                  ><img :src="item.photo" alt="" height="200" width="200"
                /></nuxt-link>
              </div>
              <div class="media-body">
                <nuxt-link :to="'/product/' + item.id"
                  ><h4>{{ item.model_name }} ( {{item.name}})</h4></nuxt-link
                >
                <!-- <h6>Starting From: <span>$16,000</span></h6> -->
                <div class="pro_type">
                  <p v-if="item.b_type">
                    Battery type: <b>{{ item.b_type }}</b>
                  </p>
                  <p v-if="item.ch_plug_charger_type">
                    Charge Time: <b>{{ item.ch_plug_charger_type }}</b>
                  </p>
                  <p v-if="item.f_home_fast_charging">
                    Fast Charging: <b>{{ item.fast_charging }}</b>
                  </p>
                </div>
                <div class="pro_op">
                  <a href="#" v-if="item.ept_traction_motor_type"><i class="icon-engine"></i> {{ item.ept_traction_motor_type }}</a>
                  <a href="#" v-if="item.c_front_tyre_size"
                    ><i class="icon-wheel">{{ item.c_front_tyre_size }}</i>
                  </a>
                  <a href="#" v-if="item.b_rated_voltage"
                    ><i class="icon-battery"></i>{{ item.b_rated_voltage }}</a
                  >
                </div>
                <nuxt-link :to="'/product/' + item.id" class="main_btn border"
                  >View Specification</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Product Area =================-->
</template>
<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.fetchDataProduct();
  },
  methods: {
    fetchDataProduct() {
      api()
        .get("product-management-show")
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
