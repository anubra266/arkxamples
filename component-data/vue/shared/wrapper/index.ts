export const sharedVueCode = {
  "/index.css":
    require("!!raw-loader!component-data/react/shared/wrapper/index.css")
      .default,

  "/public/index.html": /*html*/ `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="root"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`,

  "index.js": `import { createApp } from 'vue'
import Main from './Main.vue'
import "./index.css";

createApp(Main).mount('#root')
`,

  "/Main.vue": `<script setup>
import App from "./App.vue";

import { watchEffect } from "vue";

watchEffect(() => {
  window.parent.postMessage({ action: "getColorMode" }, "*");
  window.addEventListener("message", function (event) {
    if (event.data.colorMode) {
      switch (event.data.colorMode) {
        case "light":
          document.body.classList.add("light");
          document.body.classList.remove("dark");
          break;

        case "dark":
          document.body.classList.add("dark");
          document.body.classList.remove("light");
          break;

        default:
          break;
      }
    }
  });
});
</script>

<template>
  <App />
</template>
`,

  "package.json": `{
  "name": "vue3",
  "version": "0.1.0",
  "private": true,
  "main": "/index.js",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.26.1",
    "vue": "^3.2.45",
    "@ark-ui/vue": "rc"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^5.0.8",
    "@vue/cli-service": "^5.0.8"
  }
}`,
};
