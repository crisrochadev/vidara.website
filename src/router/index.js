import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import PublicLayout from "../layouts/PublicLayout.vue";

const routes = [
  {
    path:'/',
    component:PublicLayout,
    children:[
      {
        path:"",
        name:"home",
        component:HomeView
      },
      {
        path:'formulario-orcamento',
        component:() => import('../pages/FormularioOrcamento.vue')
      },
      {
        path:'recentes',
        component:() => import('../pages/Recentes.vue')
      },
      {
        path:'aplicativos',
        component:() => import('../pages/Aplicativos.vue')
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
