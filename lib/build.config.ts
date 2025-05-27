import { defineBuildConfig } from "unbuild";
import packageJson from "./package.json" with { type: "json" };

const banner = `/**
* ${packageJson.name} v${packageJson.version}
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
`;

export default defineBuildConfig({
  declaration: true,
  rollup: {
    output: {
      banner,
    },
  },
});
