// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayerProfileView from "../views/PlayerProfileView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/player/:id", component: PlayerProfileView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
