import { createRouter, createWebHistory } from "vue-router";
  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: () => import("@/views/Dashboard.vue"),
      children: [
         {
          name: 'home',
          path: '/home',
          component: () => import("@/views/Home.vue"),
        },
        {
          name: 'profile',
          path: '/profile',
          component: () => import("@/views/Profile.vue"),
        }
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  