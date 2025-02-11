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
          type="email"
          placeholder=""
          class="border border-[#707070] p-3 w-full rounded-lg"
        />
      </div>
      <div class="w-full mt-4 text-xs">
        <label for="password" class="block font-medium mb-1">Password</label>
        <input
          id="password"
          type="password"
          placeholder=""
          class="border border-[#707070] p-3 w-full rounded-lg"
        />
      </div>
      <div class="flex justify-center mt-5">
        <button
          @click="$router.push('/my-bucket')"
          class="bg-blue-500 text-white text-sm px-8 py-2 w-fit rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
