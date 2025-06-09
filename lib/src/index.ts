import type { App } from "vue";
import Chart from "./chart/Chart.vue";

export default {
  install(app: App) {
    app.component("Chart", Chart);
  },
};
