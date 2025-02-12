import AddItemView from "@/views/AddItemView.vue";
import EditItemView from "@/views/EditItemView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import SingleItemView from "@/views/SingleItemView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/my-bucket",
    name: "MyBucket",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-item",
    name: "AddItem",
    component: AddItemView,
    meta: { requiresAuth: true },
  },
  {
    path: "/edit-item",
    name: "edit-item",
    component: EditItemView,
  },
  {
    path: "/single-item",
    name: "single-item",
    component: SingleItemView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("loggedInUser");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;