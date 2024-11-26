import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import('./views/Brazil.vue'),
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import('./views/Hawaii.vue'),
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import('./views/Jamaica.vue'),
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import('./views/Panama.vue'),
  },
  {
    path: '/destination/:id',
    component: () => import('./views/DestinationShow.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
