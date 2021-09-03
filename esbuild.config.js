const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    platform: "browser",
    sourcemap: true,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
  })
  .catch(() => process.exit(1));
