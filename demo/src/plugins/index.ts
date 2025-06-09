import { vuetify } from "./vuetify";
import { router } from "../router";

import type { App } from "vue";

export const registerPlugins = (app: App) => {
  app.use(vuetify).use(router);
};
