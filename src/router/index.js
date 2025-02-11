import AddItemView from '@/views/AddItemView.vue'
import EditItemView from '@/views/EditItemView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SingleItemView from '@/views/SingleItemView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/my-bucket',
      name: 'my-bucket',
      component: HomeView
    },
    {
      path: '/add-item',
      name: 'add-item',
      component: AddItemView
    },
    {
      path: '/edit-item',
      name: 'edit-item',
      component: EditItemView
    },
    {
      path: '/single-item',
      name: 'single-item',
      component: SingleItemView
    },
  ],
})

export default router
