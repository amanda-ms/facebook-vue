import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss";
import "./styles/global.scss";
import Notifications from "vue-notification";

Vue.config.productionTip = false;
Vue.use(Notifications);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
