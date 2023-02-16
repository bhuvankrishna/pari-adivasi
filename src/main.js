import { createApp } from "vue";
import App from "./App.vue";
import paintingsMain from "./components/paintingsMain.vue";
import headingTitle from "./components/headingTitle.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);
app.component("paintings-main", paintingsMain);
app.component("heading-title", headingTitle);
app.mount("#app");
