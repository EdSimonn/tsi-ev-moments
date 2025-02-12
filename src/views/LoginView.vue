<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const errors = ref({});

const login = () => {
  errors.value = {};

  const userData = JSON.parse(localStorage.getItem("user"));

  if (!userData) {
    errors.value.email = "No account found. Please register first.";
    return;
  }

  if (email.value !== userData.email) {
    errors.value.email = "Incorrect email.";
    return;
  }

  if (password.value !== userData.password) {
    errors.value.password = "Incorrect password.";
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(userData));
  router.push("/my-bucket");
};
</script>

<template>
  <div class="flex items-center justify-center h-[calc(100vh-100px)]">
    <div
      class="flex flex-col justify-center w-96 mx-auto text-left font-normal"
    >
      <h2 class="text-3xl font-bold">Welcome back,</h2>
      <p class="mt-2 text-sm">
        Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of
        water but I store awesome moments you will like to have in coming years.
      </p>

      <div class="w-full mt-4 text-xs">
        <label for="email" class="block font-medium mb-1">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="border border-[#707070] p-3 w-full rounded-lg"
        />
        <p v-if="errors.email" class="text-red-500 text-xs">
          {{ errors.email }}
        </p>
      </div>

      <div class="w-full mt-4 text-xs">
        <label for="password" class="block font-medium mb-1">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          class="border border-[#707070] p-3 w-full rounded-lg"
        />
        <p v-if="errors.password" class="text-red-500 text-xs">
          {{ errors.password }}
        </p>
      </div>

      <div class="flex justify-center mt-5">
        <button
          @click="login"
          class="bg-blue-500 text-white text-sm px-8 py-2 w-fit rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>