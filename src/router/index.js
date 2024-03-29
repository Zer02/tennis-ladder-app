// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from '@/views/AboutView.vue';
import PlayerProfileView from "../views/PlayerProfileView.vue";
import SimulationView from '../views/Simulation.vue';
import MapView from '../components/Map.vue';

const routes = [
  { 
    path: "/", 
    name: HomeView,
    component: HomeView 
  },
  { 
    path: "/about", 
    name: AboutView,
    component: AboutView 
  },
  { 
    path: "/player/:id", 
    component: PlayerProfileView, 
    props: true 
  },
  {
    path: '/simulation',
    name: 'Simulation',
    component: SimulationView,
  },
  {
    path: '/map',
    name: 'Map',
    component: MapView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
