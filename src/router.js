import { createRouter, createWebHistory } from "vue-router";

//路由配置，配置路由路径与组件的对应关系
const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/Page/indexPage.vue"),
  },
  {
    path: "/base",
    name: "base",
    component: () => import("@/Page/basePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  sensitive: true,
});

export default router;
