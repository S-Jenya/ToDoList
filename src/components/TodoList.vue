<template>
  <div>
    <ul>
      <TodoItem
          v-for="(todo, i) in todos" :key="todo.id"
          v-bind:todo = "todo"
          v-bind:index = "i"
          v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"
export default{
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id){
      this.$emit('remove-todo', id);
    }
  }
}
</script>
// scopes стили видны только внутри этого компанента
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
