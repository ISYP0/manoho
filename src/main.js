import Vue from "vue";
import App from "./App.vue";

import weui from "weui.js";
import {VueRouter, router} from "./router"

Vue.use(VueRouter)
Vue.config.productionTip = false;
Vue.prototype.$weui = weui;


new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
