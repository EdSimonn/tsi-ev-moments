<template>
  <div class="py-10 md:px-16 px-8">
    <h1 class="text-3xl font-bold">
      Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s
      Iscentury
    </h1>
    <p class="text-blue-500 text-sm mt-1">20/05/2025</p>

    <div class="mt-4 space-y-4">
      <p v-for="n in 3" :key="n" class="text-[#000000] ">
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It’s not Latin, though it looks like it, and it actually
        says nothing.” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real. Until recently,
        the prevailing view assumed lorem ipsum was born as a nonsense text.
        “It’s not Latin, though it looks like it, and it actually says nothing.”
        Before & After magazine answered a curious reader, “Its ‘words’ loosely
        approximate the frequency with which letters occur in English, which is
        why at a glance it looks pretty real.
      </p>
    </div>

    <div class="flex gap-4 mt-6">
      <RouterLink to="/edit-item" class="bg-[#06C3B4] text-white text-sm px-8 py-2 rounded-lg">Edit</RouterLink>
      <RouterLink to="/" class="bg-[#C34F06] text-white text-sm px-8 py-2 rounded-lg">
        Delete
      </RouterLink>
    </div>
  </div>
</template>
