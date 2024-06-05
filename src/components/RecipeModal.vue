<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!-- title -->
        
        <h1 v-if="!editstatus" class="modal-title fs-5" id="exampleModalLabel">
          {{ updatedName || recipelist.name }}
          <i class="ri-edit-box-line" @click="editname"></i>
        </h1>
        <div v-else class="d-flex">
          <input type="text" class="form-control" v-model="inputvalue" />
          <button class="btn btn-info" @click="savechanges">save</button>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- <p>Description: {{ recipedetails.description }}</p> -->
        <div class="card mb-3">
          <img :src="recipelist.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">{{ recipelist.name }}</h5>

            <div class="p-2 rounded-3">
              <h5 class="card-title">Ingredients</h5>

              <p class="card-text">
                <i class="ri-restaurant-2-line text-danger fw-bold"></i>
                {{ recipelist.ingredients[0] }},<br />
                <i class="ri-restaurant-2-line text-danger fw-bold"></i>
                {{ recipelist.ingredients[1] }}, <br /><i
                  class="ri-restaurant-2-line text-danger fw-bold"
                ></i>
                {{ recipelist.ingredients[2] }}, <br /><i
                  class="ri-restaurant-2-line text-danger fw-bold"
                ></i>
                {{ recipelist.ingredients[3] }}, <br /><i
                  class="ri-restaurant-2-line text-danger fw-bold"
                ></i>
                {{ recipelist.ingredients[4] }}, <br />
                <i class="ri-restaurant-2-line text-danger fw-bold"></i>
                {{ recipelist.ingredients[5] }}
              </p>

              <h5 class="card-title">Instructions</h5>
              <p class="card-text">
                <i class="ri-indeterminate-circle-line text-danger fw-bold"></i>
                {{ recipelist.instructions[0] }}, <br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipelist.instructions[1] }}, <br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipelist.instructions[2] }}, <br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipelist.instructions[3] }},<br /><i
                  class="ri-indeterminate-circle-line text-danger fw-bold"
                ></i>
                {{ recipelist.instructions[4] }}
              </p>

              <h5 class="card-title">Time</h5>
              <div class="">
                <p class="card-text">
                  CookTimeMinutes: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                  {{ recipelist.cookTimeMinutes }}, <br />
                  mealType: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                  {{ recipelist.mealType[0] }}, <br />
                  prepTimeMinutes: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                  {{ recipelist.prepTimeMinutes }}, <br />
                  servings: <i class="ri-calendar-schedule-line text-danger fw-bold"></i>
                  {{ recipelist.servings }}
                </p>
              </div>
              <h5 class="card-title mt-3">Process</h5>
              <div class="">
                <p class="card-text">
                  cuisine: <i class="ri-progress-6-line text-danger fw-bold"></i>
                  {{ recipelist.cuisine }},<br />
                  difficulty: <i class="ri-progress-6-line text-danger fw-bold"></i>
                  {{ recipelist.difficulty }}
                </p>
              </div>

              <h5 class="card-title mt-3">Tags</h5>
              <div>
                <i class="ri-restaurant-2-fill text-danger fw-bold"></i>
                {{ recipelist.tags[0] }},<br />
                <i class="ri-goblet-2-line text-danger fw-bold"></i> {{ recipelist.tags[1] }}
              </div>
            </div>
          </div>
          <p class="card-text text-end fw-bold">No:{{ recipelist.id }}</p>
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
// import { defineProps } from 'vue'

// const props = defineProps({
//   recipedetails: {
//     type: Object,
//     required: true
//   }
// })
// defineProps({
//   recipelist:{
//     type: Object,
//     required: true
//   }
// })

import { ref } from 'vue'
const propsValue = defineProps(['recipelist','name'])
console.log(propsValue)
const emitValue2 = defineEmits(['updateNameToParent'])
const inputvalue = ref(propsValue.recipelist.name)
const updatedName = ref('')
const editstatus = ref(false)
const editname = () => {
  editstatus.value = true
}
const savechanges = () => {
  editstatus.value = false
  updatedName.value = inputvalue.value
  emitValue2('updateNameToParent', updatedName.value)
}
</script>

<style scoped>
/* Add your modal-specific styles here */
</style>
