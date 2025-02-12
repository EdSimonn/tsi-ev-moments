<script setup>
import { ref, onMounted } from "vue";

const user = ref({ fullname: "John Doe" });

onMounted(() => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    user.value.fullname = loggedInUser.fullname;
  }
});
</script>

<template>
  <div class="py-8 md:px-16 px-8">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-3xl font-bold">Welcome {{ user.fullname }},</h2>
        <p class="text-sm">Here are items in your eventful moment bucket.</p>
      </div>
      <button
        @click="$router.push('/add-item')"
        class="bg-blue-500 text-white text-sm px-8 py-2 rounded-lg"
      >
        Add Item
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-sm">
      <div
        class="border p-4 space-y-4 shadow-lg hover:bg-[#FFF5A7] transition-all"
        v-for="n in 8"
        :key="n"
      >
        <h3 class="font-bold">
          Lorem ipsum began as scrambled, nonsensical Latin derived from
          Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
        </h3>
        <p class="">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It’s not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real. Until recently, the prevailing view assumed lorem ipsum was born
          as a nonsense text. “It’s not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real.
        </p>
        <div class="flex justify-between items-center">
          <RouterLink to="/single-item" class="text-[#5271FF]"
            >View Details</RouterLink
          >
          <div class="flex justify-between items-center gap-4">
            <p class="text-[#B2B2B2]">20/05/2021</p>
            <p>20/05/2025</p>
          </div>
        </div>
      </div>
    </div>

    <div class="m-auto w-fit my-20">
      <RouterLink
        to=""
        class="block bg-[#5271FF] text-white text-sm text-center py-2 px-8 rounded-lg"
        >Load More</RouterLink
      >
    </div>
  </div>
</template>
