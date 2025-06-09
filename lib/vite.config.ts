import { defineConfig } from "vite";
import packageJson from "./package.json" with { type: "json" };
import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const banner = `/**
* ${packageJson.name} v${packageJson.version}
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
`;

export default defineConfig(() => {
  const plugins = [
    vue(),
    dts({ rollupTypes: true, insertTypesEntry: true }),
  ];

  return {
    plugins: plugins,
    build: {
      minify: true,
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "LightweightChartsVue",
        formats: ["es", "iife"],
        fileName: format => {
          if (format === "es") return `${packageJson.name}.mjs`;
          if (format === "iife") return `${packageJson.name}.standalone.js`;
          return `${packageJson.name}.js`;
        },
      },
      rollupOptions: {
        output: {
          banner,
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  };
});
