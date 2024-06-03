<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRecipeStore } from '@/store/recipeStore'
import RecipeCard from '../components/RecipeCard.vue'
import { storeToRefs } from 'pinia'

const store = useRecipeStore()
const { recipes } = storeToRefs(store)
const count = ref(0)
const searchQuery = ref('')

const filteredRecipes = computed(() => {
  if (!searchQuery.value) {
    return recipes.value
  }
  return recipes.value.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

onMounted(() => {
  store.getAllRecipes()
})

const updateMe = (me) => {
  console.log(me)
  console.log('from child')

  if (!me) {
    count.value++
  } else {
    count.value--
  }
}
</script>

<template>
  <h1>Recipes</h1>
  count {{ count }}
  <div class="container">
    <div class="col-md-3 col-sm-12 mb-4">
      <input type="text" class="form-control" placeholder="Search" v-model="searchQuery" />
    </div>
    <div class="row">
      <template v-if="filteredRecipes.length > 0">
        <!-- <RecipeCard
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          :recipedetails="recipe"
        /> -->

        <RecipeCard
          v-for="(recipe, index) in recipes"
          :key="index"
          :recipedetails="recipe"
          @update-favourites="updateMe"
        />
      </template>
      <template v-else>
        <p class="text-center mt-4 text-danger">No recipes available</p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
</style>
