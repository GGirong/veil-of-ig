import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import "vue-material/dist/theme/black-green-light.css";
import Directives from "../plugin/directives";
import VueKinesis from "vue-kinesis";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueLazyImageLoading from 'vue-lazy-image-loading'
 
Vue.use(VueLazyImageLoading)

library.add(faArrowLeft);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueMaterial);
Vue.use(Directives);
Vue.use(VueKinesis);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
