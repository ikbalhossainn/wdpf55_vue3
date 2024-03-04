<script setup>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import Departments from "./components/Departments.vue";
import AboutUs from "./components/AboutUs.vue";
import Doctors from "./components/Doctors.vue";
import Contact from "./components/Contact.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <img src="/images/hero-bg.png" alt="" />
    </div>

    <!-- header section strats -->
    <Header />
    <!-- end header section -->

    <!-- slider section -->
    <Slider />
    <!-- end slider section -->
  </div>

  <!-- department section -->
  <Departments />
  <!-- end department section -->

  <!-- about section -->
  <AboutUs />
  <!-- end about section -->

  <!-- doctor section -->
  <Doctors />
  <!-- end doctor section -->

  <!-- contact section -->
  <Contact />
  <!-- end contact section -->

  <!-- client section -->
  <Testimonials />
  <!-- end client section -->

  <!-- footer section -->
  <Footer />
  <!-- footer section -->
</template>

<style></style>
