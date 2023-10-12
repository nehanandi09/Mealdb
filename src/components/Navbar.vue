<template>
  <header
    class="bg-white shadow-md h-16 px-5 flex justify-between items-center"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
      >Home</router-link
    >
    <div className="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 h-full hover:text-teal-700 transition-colors"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full hover:text-teal-700 transition-colors"
      >
        Meals by Letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="px-2 h-full hover:text-teal-700 transition-colors"
      >
        Meals by ingredients
      </router-link>
    </div>
  </header>
</template>
