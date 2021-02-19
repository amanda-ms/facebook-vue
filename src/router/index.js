import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/Login";
import Timeline from "@/pages/Timeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: Timeline,
  },
  {
    path: "/watch",
    name: "watch",
    component: Timeline,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
