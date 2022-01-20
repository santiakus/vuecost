import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./views/Home.vue";
import WebSection from "./views/WebSection.vue";
import PreuFinal from "./views/PreuFinal.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/web",
    name: "web",
    component: WebSection
  },
  {
    path: "/preu-final",
    name: "preu-final",
    component: PreuFinal
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;