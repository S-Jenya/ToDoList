import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import todos from '@/views/Todos'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/todos',
            name: 'todos',
            component: todos
        }
    ]
})


