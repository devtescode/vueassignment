<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ recipedetails.title }}</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body shadow-lg">
        <!-- <p>Description: {{ recipedetails.description }}</p> -->
          <div class="card mb-3 shadow-lg">
            <img :src="recipedetails.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="card-title">Name: {{ recipedetails.name }}</h6>
              

              <div class="p-2 shadow-lg rounded-3">
         
              <h5 class="card-title">Ingredients</h5>
              <p class="card-text"> {{ recipedetails.ingredients[0] }}, {{ recipedetails.ingredients[1] }},  {{ recipedetails.ingredients[2] }},  {{ recipedetails.ingredients[3] }}, {{ recipedetails.ingredients[4] }}, {{ recipedetails.ingredients[5] }}</p>

                  <h5 class="card-title">Instructions</h5>              
              <p class="card-text">{{ recipedetails.instructions[0] }}, {{ recipedetails.instructions[1] }}, {{ recipedetails.instructions[2] }}, {{ recipedetails.instructions[3] }},
                {{ recipedetails.instructions[4 ] }}
              </p>
              <div class="d-flex justify-content-between">
                 <p class="card-text">CookTimeMinutes: {{ recipedetails.cookTimeMinutes }}</p>
                 <p class="card-text">mealType:  {{ recipedetails.mealType[0] }}</p>
              </div>
              </div>
            </div>
              <p class="card-text text-end fw-bold">No:{{ recipedetails.id }} </p>
          </div>
          
        <!-- Add more details as needed -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  recipedetails: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
/* Add your modal-specific styles here */
</style>
