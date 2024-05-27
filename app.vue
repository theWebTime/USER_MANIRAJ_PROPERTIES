<template>
  <!-- <client-only> -->
  <body class="nla_demo_one">
    <div class="preloader" id="preloader">
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
        <path
          d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z"
        ></path>
      </svg>
      <div class="inner">
        <canvas
          class="progress-bar"
          id="progress-bar"
          width="200"
          height="200"
        ></canvas>
        <figure><img src="/images/Mi.jpg" alt="Image" /></figure>
        <small>Loading</small>
      </div>
    </div>
    <div class="smooth-scroll" data-scroll-container>
      <div class="section-wrapper" data-scroll-section>
        <!-- <div> -->
        <TheHeader />
        <NuxtPage />
        <TheFooter />
        <!-- </div> -->
      </div>
    </div>
  </body>
  <!-- </client-only> -->
</template>

<script>

export default {
}
</script>