<template>
  <div class="w-[800px] mx-auto">
    <div>
      <h1 class="text-5xl font-bold mb-5 text-emerald-700">
        {{ meal.strMeal }}
      </h1>
      <span>{{ meal.strCategory }}</span>
      <h2>Ingredients</h2>
    </div>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <pre>{{ meal }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
