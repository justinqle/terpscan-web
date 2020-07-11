import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import axios from "axios";

axios.defaults.withCredentials = true;

Vue.use(Buefy, {
  defaultIconPack: "fas",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
