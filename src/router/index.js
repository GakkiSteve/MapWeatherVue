import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index";
Vue.use(VueRouter);

const MapContainer = () =>
  import("../components/MapContainer/MapContainer.vue");
const Weather = () => import("../components/Weather/Weather.vue");
// const Search = () => import('../pages/Search/Search.vue')
// const Order = () => import('../pages/Order/Order.vue')
// const Profile = () => import('../pages/Profile/Profile.vue')
// const Login = () => import('@/pages/Login/Login')
// const Shop = () => import('@/pages/Shop/Shop')
const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/MapContainer",
    component: MapContainer,
    // 元数据，用于控制是否显示底部导航栏
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/Weather",
    component: Weather,
    // 元数据，用于控制是否显示底部导航栏
    meta: {
      showFooter: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch((err) => err);
};
