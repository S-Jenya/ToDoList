<template>
  <!-- .prevent позволяет не перезагружать форму после нажатия на create-->
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Новое событие">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data(){
    return{
      title: ''
    }
  },
  methods: {
    onSubmit(){
      if(this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          compleate: false
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style scopes>
  form {
    display: flex;
  }
  input {
    width: 400px;
  }
</style>
