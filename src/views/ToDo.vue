<template>
  <div class="bg-dark text-light text-center p-3 fs-1">ToDo List</div>
  <div class="p-5">
    <div class="d-flex justify-content-between">
      <span>Count: {{ todoCount }}</span>
      <button class="btn btn-danger" @click="store.$reset()">Reset State</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">To do Item</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(todo, index) in todos">
          <th scope="row">{{ todo.id }}</th>
          <td>{{ todo.todo }}</td>
          <td>{{ todo.completed ? 'Completed' : 'Pending' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useToDoStore } from '../store/todoStore.js'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const store = useToDoStore()
const { todos, todoCount } = storeToRefs(store)

const animals = {
  name: 'Tiger',
  color: 'orange'
}

// const name = animals.name
const { name, color } = animals
console.log(name)
console.log(color)
// console.log(storeToRefs(store))
// const todos = storeToRefs(store).todos
// console.log(todos);
// const {todos} = storeToRefs(store)
// const allTodos = store.todos
onMounted(() => {
  console.log(todoCount);
  if (!todoCount.value) {
    store.getAllTodos()
  }
})
</script>

<!-- re explain storeToRefs -->
