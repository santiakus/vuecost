import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./views/Home.vue";
import WebSection from "./views/WebSection.vue";

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
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;