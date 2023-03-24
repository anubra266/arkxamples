import { sharedVueCode } from "component-data/vue/shared/wrapper";

export default {
  files: {
    "/App.vue": /*html*/ `<template>
  <div>
    <h1>No example for this yet.</h1>
    <h3>Feel free to contribute</h3>
  </div>
</template>`,

    "/styles.css":
      require("!!raw-loader!component-data/react/shared/404/styles.css")
        .default,
    ...sharedVueCode,
  },
  visibleFiles: ["/App.vue", "/styles.css"],
};
