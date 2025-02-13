<script setup>
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav class="bg-teal-700 text-white md:px-16 px-8 py-4 flex justify-between">
    <h1 class="font-bold">Eventful Moments.</h1>
    <div>
      <template v-if="route.path === '/' || route.path === '/register'">
        <RouterLink to="/" class="mr-4">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/" class="mr-4">Logout</RouterLink>
        <RouterLink to="/my-bucket">My Bucket</RouterLink>
      </template>
    </div>
  </nav>
</template>
