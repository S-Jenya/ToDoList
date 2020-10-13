<template>
  <div>
    <button @click="back" >Назад</button>
    <AddTodo
        @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">completed</option>
      <option value="not-completed">not-completed</option>
    </select>
    <a href="API/test.php">json</a>
    <hr>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  data(){
    return{
      todos:[
        /* {id: 1, title: 'Купить хлеб', completed: false },
         {id: 2, title: 'Купить молоко', completed:false },
         {id: 3, title: 'Снять деньги', completed:false }*/
      ],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },


  /*watch: {
    filter(value) { /!*название функции в watch Должно совпадать с названием фильтра filter*!/
      console.log(value)
    }
  },*/

  computed: {
    filteredTodos(){
      if(this.filter === 'all') {
        return this.todos
      }
      if(this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if(this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)

      }
      return this.todos.filter(t => !t.completed)
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json
            this.loading = false
          }, 500)

        })
  },
  methods: {
    back(){
      this.$router.push('/');
    },
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo){
      this.todos.push(todo)
    }
  }
}
</script>