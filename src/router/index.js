import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";
import Header from "../components/myHeader.vue";
import Login from "../views/login";
import Register from "../views/register";
import store from "../store";
import Ceshi from "../views/ceshi";
import Address from "../views/address";
import newAddress from "../views/newAddress";
import Settle from "../views/settle"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/address",
    name: "Address",
    component: Address,
  },
  {
    path: "/newaddress",
    name: "newAddress",
    component: newAddress,
  },
  {
    path: "/ceshi",
    name: "ceshi",
    component: Ceshi,
  },
  {
    path: "/settle",
    name: "settle",
    component: Settle,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: "/xpsf",
    name: "xpsf",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/xpsf.vue"),
  },
  {
    path: "/xilie",
    name: "xilie",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/xilie.vue"),
  },
  {
    path: "/list",
    name: "list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/list.vue"),
  },
  {
    path: "/comment",
    name: "comment",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/comment.vue"),
  },
  {
    path: "/car",
    name: "car",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/car.vue"),
  },
  {
    path: "/me",
    name: "me",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/me.vue"),
    //放置前卫,如果没有登录的话先跳转到登录页面
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/header",
    name: "Header",
    component: Header,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  //检测to的meta中是否包含requiresAuth属性，如包含则进行检测

  if (to.matched.some((r) => r.meta.requiresAuth)) {
    //如果store中isLogined为false或sessionStorage中的isLogined为false
    //则跳转到登录路由
    console.log(store.state.isLogined);
    console.log(sessionStorage.getItem("isLogined"));
    if (
      store.state.isLogined == false ||
      sessionStorage.getItem("isLogined") == false
    ) {
      console.log("to");
      //因为需要跳转到登录前的路由,所以需要将登录前的路由作为
      //参数传递给login,当在login登录成功后,
      //再获取该参数并且跳转到这个路由地址
      router.push({ path: "/login", query: { path: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
