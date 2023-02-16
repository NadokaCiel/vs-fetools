import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import eslint from "@rollup/plugin-eslint";
import camelCase from "lodash.camelcase";
import { terser } from "rollup-plugin-terser";
import getExtensions from "../lib/getExtensions";
import extensionOrder from "rollup-plugin-extension-order";

const pkg = require("../../package.json");
const inputFileName = "index";

export default function getConfig(platform) {
  return {
    input: `src/${inputFileName}.ts`,
    output: [
      {
        file: `${pkg.mainPrefix}.${platform}.js`,
        name: camelCase(pkg.name),
        format: "umd",
        sourcemap: true,
        exports: "named",
        compact: true,
        plugins: [terser()],
      },
      {
        file: `${pkg.modulePrefix}.${platform}.js`,
        format: "es",
        sourcemap: true,
      },
    ],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: ["return-data", "@types/node"],
    watch: {
      include: "src/**",
    },
    plugins: [
      extensionOrder(getExtensions(platform)),
      eslint(),
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript({ useTsconfigDeclarationDir: true }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),

      // Resolve source maps to the original source
      sourceMaps(),
    ],
  };
}
