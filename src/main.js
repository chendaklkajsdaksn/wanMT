import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mint from "mint-ui";
import axios from "axios";
import qs from "qs";
axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Vue.prototype.axios = axios;

Vue.config.productionTip = false;
Vue.use(Mint);
import "mint-ui/lib/style.min.css";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
