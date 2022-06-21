import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

const year = new Date().getFullYear();
const banner = `/*\nfiskalpro-bridge ${pkg.version}\nCopyright © ${year} freevision s.r.o.\n */`;

export default [
  {
    input: "src/index.ts",
    output: [
      {
        name: "FiskalProBridge",
        file: "dist/fiskalpro-bridge.umd.js",
        format: "umd",
        banner,
      },
      {
        file: "dist/fiskalpro-bridge.js",
        format: "es",
        banner,
      },
    ],
    context: "window",
    plugins: [
      resolve(),
      typescript(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/fiskalpro-bridge.min.js",
      format: "es",
      banner,
      sourcemap: true,
    },
    context: "window",
    plugins: [
      resolve(),
      typescript(),
      terser({
        mangle: true,
        compress: true,
      }),
    ],
  },

];