import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

// 关联 vue-axios
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  // 使用 Router
  router: router,
  render: h => h(App)
}).$mount("#app");
