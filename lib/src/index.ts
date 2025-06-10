import type { App } from "vue";
import { Chart } from "./chart";

export default {
  install(app: App) {
    app.component("Chart", Chart);
  },
};
