import { vanillaScopedTransform } from "component-data/utils";
import { sharedVueCode } from "component-data/vue/shared/wrapper";

export const popover = {
  files: {
    "/styles.css":
      require("!!raw-loader!component-data/react/vanilla_css/scoped/popover/styles.css")
        .default,
    "/App.vue": require("./App.vue").default,
    ...sharedVueCode,
  },
  visibleFiles: ["/App.vue", "/styles.css"],
};

export default vanillaScopedTransform(popover);
