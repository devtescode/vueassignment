import { defineStore } from "pinia";
import axios from 'axios'

// state - 
// getters - 
// actions
export const useToDoStore =  defineStore('todoStore',{
    state:()=>{
        return{
            todos:[],
        }
    },
    getters:{
        todoCount:(state)=>state.todos.length,
        completedTodos(state){
            return state.todos.filter((todo)=>todo.completed)
        }
    },
    actions:{
        getAllTodos(){
            axios.get('https://dummyjson.com/todos')
            .then((response)=>{
                console.log(response.data.todos);
                this.todos = response.data.todos
            })
        }
    },
    persist:true
})