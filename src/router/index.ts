import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Main from '../views/MainPage.vue'
import Registration from '../views/RegistrationPage.vue'
import Login from '../views/LoginPage.vue'

export const LOGIN = '/login';
export const REGISTRATION = '/registration';
export const MAIN = '/main';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: REGISTRATION,
    name: 'Registration',
    component: Registration
  },
  {
    path: LOGIN,
    name: 'Login',
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
