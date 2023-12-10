import { createRouter, createWebHistory } from 'vue-router'
import { getItem } from '../helper/localStorage'
import { routes } from './router'
export const router = createRouter({
    history: createWebHistory(),
    routes: [...routes],
    // scrollBehavior(_to, _from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         return { top: 0 };
    //     }
    // }
})

router.beforeEach((to, _, next) => {
    const isAuthenticated = getItem('Authorization');

    if (to.path !== '/login' && !isAuthenticated) {
      next({ name: 'Login' });
    } else if (to.meta.public && !!isAuthenticated) {
      next({ name: 'Dashboard' });
    } else if (to.path === '' && isAuthenticated) {
      next({ name: 'Dashboard' });
    } else {
      next();
    }
  });