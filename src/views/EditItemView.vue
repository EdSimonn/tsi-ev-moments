<template>
  <div class="flex flex-col py-8 md:px-16 px-8 items-start justify-center text-sm">
    <div class="w-80">
      <label for="date" class="block font-medium mb-1"
        >Date in the future</label
      >
      <input id="date" type="date" class="border border-[#707070] p-2 w-full rounded" />
    </div>

    <div class="w-80 mt-4">
      <label for="title" class="block font-medium mb-1">Title</label>
      <input
        id="title"
        type="text"
        placeholder=""
        class="border border-[#707070] p-2 w-full rounded"
      />
    </div>

    <div class="w-80 mt-4">
      <label for="details" class="block font-medium mb-1">Details</label>
      <textarea
        id="details"
        placeholder=""
        class="border border-[#707070] p-2 w-full rounded"
        rows="10"
      ></textarea>
    </div>

    <div class="w-80 flex justify-center mt-4">
      <button class="bg-[#5271FF] text-white px-6 py-2 rounded-lg">Update</button>
    </div>
  </div>
</template>
