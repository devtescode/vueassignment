<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRecipeStore } from '@/store/recipeStore';
import RecipeCard from '../components/RecipeCard.vue';
import { storeToRefs } from 'pinia';

const store = useRecipeStore();
const { recipes } = storeToRefs(store);

const searchQuery = ref('');

const filteredRecipes = computed(() => {
  if (!searchQuery.value) {
    return recipes.value;
  }
  return recipes.value.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(() => {
  store.getAllRecipes();
});
</script>

<template>
  <h1>Recipes</h1>
  <div class="container">
    <div class="col-md-3 col-sm-12 mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="searchQuery"
      />
    </div>
    <div class="row">
      <RecipeCard
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :recipedetails="recipe"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
