import { createApp } from "vue";
import App from "./App.vue";
import "./css/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
