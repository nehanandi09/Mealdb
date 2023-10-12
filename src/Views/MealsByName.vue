<template>
  <div class="flex flex-col items-center p-8">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of mealsList"
      :key="`mealId-${meal.idMeal}`"
      class="bg-lime-100 rounded-md overflow-hidden"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-100 h-auto"
        />
      </router-link>
      <div class="p-3">
        <h3 class="text-lg font-bold text-emerald-950">
          {{ meal.strMeal }}
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          optio est laborum et ipsam, ipsa quo nisi autem? Alias mollitia
          consectetur hic enim culpa cum dignissimos, tempora ipsam dolorem
          voluptas.
        </p>
        <div class="my-3">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-5 py-2 rounded-lg bg-red-500 text-slate-50 hover:bg-red-700 hover:text-slate-50 transition-colors"
            >Youtube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const keyword = ref("");
const route = useRoute();
const mealsList = computed(() => {
  return store.state.searchedMeals;
});

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
