import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mint from "mint-ui";
import axios from "axios";
import qs from "qs";
import Distpicker from "v-distpicker";
import Jsonp from "vue-jsonp";
import Common from "./common";
import Promise1 from "./promiss";

Vue.component("v-distpicker", Distpicker);

axios.defaults.baseURL = "http://192.168.0.103:4000";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Vue.prototype.axios = axios;

Vue.config.productionTip = false;
Vue.use(Mint);
Vue.use(Jsonp);
Vue.use(Common);
Vue.use(Promise1);
import "mint-ui/lib/style.min.css";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
