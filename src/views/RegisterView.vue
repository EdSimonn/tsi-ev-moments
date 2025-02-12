<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const fullname = ref("");
const email = ref("");
const password = ref("");
const errors = ref({});

const validate = () => {
  errors.value = {};
  let isValid = true;

  if (!fullname.value.trim()) {
    errors.value.fullname = "Full Name is required.";
    isValid = false;
  }
  if (!email.value.trim()) {
    errors.value.email = "Email is required.";
    isValid = false;
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    errors.value.email = "Invalid email format.";
    isValid = false;
  }
  if (!password.value.trim()) {
    errors.value.password = "Password is required.";
    isValid = false;
  } else if (password.value.length < 6) {
    errors.value.password = "Password must be at least 6 characters.";
    isValid = false;
  }

  return isValid;
};


const register = () => {
  if (!validate()) return;

  const userData = {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  router.push("/");
};
</script>

<template>
  <div class="flex items-center justify-center h-[calc(100vh-100px)]">
    <div
      class="flex flex-col justify-center w-96 mx-auto text-left font-normal"
    >
      <h2 class="text-3xl font-bold">Create an account,</h2>

      <div class="w-full mt-4 text-xs">
        <label for="fullname" class="block font-medium mb-1">Full Name</label>
        <input
          id="fullname"
          v-model="fullname"
          type="text"
          placeholder="Enter your full name"
          class="border border-[#707070] p-3 w-full rounded-lg"
        />
        <p v-if="errors.fullname" class="text-red-500 text-xs">
          {{ errors.fullname }}
        </p>
      </div>

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
          @click="register"
          class="bg-blue-500 text-white text-sm px-8 py-2 w-fit rounded-lg"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>
