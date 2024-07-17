// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayerProfileView from "../views/PlayerProfileView.vue";
import SimulationView from '../views/Simulation.vue';
import Map from '../components/Map.vue';
import SecondaryMap from "@/views/SecondaryMap.vue";

const routes = [
  {
    path: "/",
    name: HomeView,
    component: HomeView,
  },
  {
    path: "/player/:id",
    component: PlayerProfileView,
    props: true,
  },
  {
    path: "/simulation",
    name: "Simulation",
    component: SimulationView,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/secondaryMap",
    name: "SecondaryMap",
    component: SecondaryMap,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
