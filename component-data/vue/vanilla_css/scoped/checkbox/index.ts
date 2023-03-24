import { sharedVueCode } from "component-data/vue/shared/wrapper";

export default {
  files: {
    "/styles.css":
      require("!!raw-loader!component-data/react/vanilla_css/scoped/checkbox/styles.css")
        .default,
    "/App.vue": require("./App.vue").default,
    "/CheckIcon.vue": require("./CheckIcon.vue").default,
    "/MinusIcon.vue": require("./MinusIcon.vue").default,
    ...sharedVueCode,
  },
  visibleFiles: ["/App.vue", "/styles.css", "/CheckIcon.vue", "/MinusIcon.vue"],
};
