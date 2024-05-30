<template>

  <div class="col-md-4">
    <div class="card  w-100 mt-4 shadow hoverdiv"
     type="button"
          :data-bs-toggle="'modal'"
          :data-bs-target="'#modal' + recipedetails.id"
    >
      <img :src="recipedetails.image" width="100" class="card-img-top" alt="" />
      <div class="card-body gap-3">
        <p class="card-title text-center ">{{ recipedetails.name }}</p>

        <!-- <button
          class="btn btn-primary text-center"
         
        >
          Check
        </button> -->
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'modal' + recipedetails.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <RecipeModal :recipedetails="recipedetails" />
    </div>
  </div>
</template>

<script setup>
import RecipeModal from './RecipeModal.vue';
defineProps(['recipedetails']);
</script>

<style scoped>
.hoverdiv {
  border: 1px solid transparent;
  padding: 5px;
  display: inline-block;
  transition: border 0.3s ease, border-radius 0.3s ease, padding 0.3s ease; /* Added transitions */
}

.hoverdiv:hover {
  padding: 0px;
  border-radius: 10px;
  border-color: black; 
}


</style>
