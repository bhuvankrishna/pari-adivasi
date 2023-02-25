import {
    createApp
} from "vue";
import {
    createRouter,
    createWebHistory
} from "vue-router";

import App from "./App.vue";
import paintingsMain from "./components/childComp/headingTitle.vue";
import headingTitle from "./components/childComp/paintingsMain.vue";
import paintingsPage from "./components/paintingsPage.vue";
import detailsPage from "./components/detailsPage.vue";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            component: paintingsPage
        },
        {
            path: "/en/childrens-paintings/:id",
            component: detailsPage
        },
    ],
});

const app = createApp(App);

app.use(router);
app.component("paintings-main", paintingsMain);
app.component("heading-title", headingTitle);
app.component("paintings-page", paintingsPage);
app.component("details-page", detailsPage);
app.mount("#app");