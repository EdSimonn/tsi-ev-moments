<!-- <script setup>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <Navbar />
  <RouterView/>
  <Footer/>
</template> -->

<script setup>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
