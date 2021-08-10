import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import School2 from "../views/School2.vue";
// import ListExam from "../views/ListExam.vue";
// import IfExam from "../views/IfExam.vue";
// import EventExam from "../views/EventExam.vue";
// import EventExam2 from "../views/EventExam2.vue";
// import ComputedExam from "../views/ComputedExam.vue";
// import WatchExam from "../views/Exam.vue";
// import DataBinding from "../views/DataBinding.vue";
import ComponentExam from "../views/ComponentExam2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/school",
    name: "School",
    component: ComponentExam,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
