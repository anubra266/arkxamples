import { vanillaScopedTransform } from "component-data/utils";
import { sharedVueCode } from "component-data/vue/shared/wrapper";

export const select = {
  files: {
    "/styles.css":
      require("!!raw-loader!component-data/react/vanilla_css/scoped/select/styles.css")
        .default,
    "/App.vue": require("./App.vue").default,
    "/SelectIcon.vue": require("./SelectIcon.vue").default,
    ...sharedVueCode,
  },
  visibleFiles: ["/App.vue", "/styles.css", "/SelectIcon.vue"],
};

export default vanillaScopedTransform(select);
