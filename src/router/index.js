import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    redirect: {
      path: "/"
    }
  },
  {
    path: "/brands",
    name: "brands",
    component: () => import("@/views/Brands.vue")
  },
  {
    path: "/mobiles",
    name: "mobiles",
    component: () => import("@/views/Mobiles.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/Blog.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("@/components/Product.vue"),
    props: true
  },
  {
    path: "/brand/:name",
    name: "Brand",
    component: () => import("@/views/Brand.vue"),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
