import Vue from "vue";
import Router from "vue-router";
import Cart from "./pages/cart.vue";
import Address from "./pages/address.vue";

// Router 配置
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      component: Cart
    },
    {
      path: "/address",
      component: Address
    }
  ]
});
