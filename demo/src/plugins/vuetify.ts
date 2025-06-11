import "@mdi/font/css/materialdesignicons.css";
import "vuetify/_styles.scss";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
  }
});

export { vuetify };
