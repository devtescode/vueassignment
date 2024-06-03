<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ recipedetails.title }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- <p>Description: {{ recipedetails.description }}</p> -->
        <div class="card mb-3">
          <img :src="recipedetails.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">{{ recipedetails.name }}</h5>

            <div class="p-2 rounded-3">
              <h5 class="card-title">Ingredients</h5>

              <p class="card-text">
                <i class="ri-restaurant-2-line text-danger fw-bold"></i>
                {{ recipedetails.ingredients[0] }},<br />
                <i class="ri-restaurant-2-line text-danger fw-bold"></i>
                {{ recipedetails.ingredients[1] }}, <br /><i
                  class="ri-restaurant-2-line text-danger fw-bold"
                ></i>
                {{ recipedetails.ingredients[2] }}, <br /><i
                  class="ri-restaurant-2-line text-danger fw-bold"
                ></i>
                {{ recipedetails.ingredients[3] }}, <br /><i
                  class="ri-restaurant-2-line text-danger fw-bold"
                ></i>
                {{ recipedetails.ingredients[4] }}, <br />
                <i class="ri-restaurant-2-line text-danger fw-bold"></i>
                {{ recipedetails.ingredients[5] }}
              </p>

              <h5 class="card-title">Instructions</h5>
              <p class="card-text">
                <i class="ri-indeterminate-circle-line text-danger fw-bold"></i>
                {{ recipedetails.instructions[0] }}, <br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipedetails.instructions[1] }}, <br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipedetails.instructions[2] }}, <br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipedetails.instructions[3] }},<br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipedetails.instructions[4] }}
              </p>

              <h5 class="card-title">Time</h5>
              <div class="">
                <p class="card-text">
                  CookTimeMinutes: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                  {{ recipedetails.cookTimeMinutes }}, <br />
                  mealType: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                  {{ recipedetails.mealType[0] }}, <br>
                  prepTimeMinutes: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                   {{recipedetails.prepTimeMinutes}}, <br>
                  servings: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                   {{recipedetails.servings}}
                </p>
              </div>
              <h5 class="card-title mt-3">Process</h5>
              <div class="">
                <p class="card-text">
                  cuisine: <i class="ri-progress-6-line text-danger fw-bold"></i>
                  {{ recipedetails.cuisine }},<br />
                  difficulty: <i class="ri-progress-6-line text-danger fw-bold"></i>
                  {{ recipedetails.difficulty }}
                </p>
              </div>

              <h5 class="card-title mt-3">Tags</h5>
              <div>
               <i class="ri-restaurant-2-fill text-danger fw-bold"></i> {{ recipedetails.tags[0] }},<br>
               <i class="ri-goblet-2-line text-danger fw-bold"></i> {{ recipedetails.tags[1] }}
              </div>
            </div>
          </div>
          <p class="card-text text-end fw-bold">No:{{ recipedetails.id }}</p>
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
import { defineProps } from 'vue'

const props = defineProps({
  recipedetails: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Add your modal-specific styles here */
</style>
