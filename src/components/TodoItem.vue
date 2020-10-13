<template>
  <li>
    <span v-bind:class="{done: todo.completed}" >
      {{index + 1}}
      <input class="im" type="checkbox" v-if="!todo.completed" v-on:change="todo.completed = !todo.completed">
      <input class="im" type="checkbox" v-if="todo.completed" v-model="todo.completed" >
      {{todo.title }}
    </span>
    <bitton class="rm" v-on:click="$emit('remove-todo', todo.id)">Убрвть</bitton>
  </li>
</template>

<script>
export default {
  props:{
    // указываем название того свойства, которое принимаем
    todo: {
      type: Object, // тип принимаемого значения
      required: true  // если объект не передан, то не работает
    },
    index: Number
  },
  filters: {
    uppercase: function (value) {
      console.log(value)
      //return value.toUpperCase()
    }
  }
}
</script>

// scopes стили видны только внутри этого компанента
<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  .im{
    margin-right: 0;
  }
  .rm{
    background:  green;
    color: #fff;
    padding: 3px;
  }
  .done{
    text-decoration: line-through;  /* класс для зачёркивания */
    color: green;
  }
  input{
    margin-right: 1rem;
  }
</style>
