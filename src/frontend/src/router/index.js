import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home"
import test from "../components/test"
Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Home },
    { path: "/test", component: test }
  ]
});
