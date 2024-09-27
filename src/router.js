import { createRouter, createWebHistory } from "vue-router";

//路由配置，配置路由路径与组件的对应关系
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/Page/Home.vue"),
  },
  {
    path: "/base",
    name: "Base",
    component: () => import("@/Page/base.vue"),
  },
  {
    path: "/vision",
    name: "Vision Training",
    component: () => import("@/Page/eyes/visionTraining.vue"),
  },
  {
    path: "/near-far",
    name: "Near far training",
    component: () => import("@/Page/eyes/near-far.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  sensitive: true,
});

// 路由跳转前的处理
router.beforeEach((to, from, next) => {
  if (from.name === to.name) next(false);
  else next();
});

export default router;
