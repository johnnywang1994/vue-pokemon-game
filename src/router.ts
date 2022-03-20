import { createRouter, createWebHistory } from 'vue-router';
import ViewHome from '@/views/EventHome.vue';

const routes = [
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome,
  },
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
});
