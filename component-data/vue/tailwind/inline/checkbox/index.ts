import { styles } from "component-data/react/tailwind/inline/checkbox/styles";
import { replaceClassnames } from "component-data/utils";
import { sharedVueCode } from "component-data/vue/shared/wrapper";

export default {
  files: {
    "/App.vue": replaceClassnames(require("./App.vue").default, styles),
    "/CheckIcon.vue":
      require("component-data/vue/vanilla_css/scoped/checkbox/CheckIcon.vue")
        .default,
    "/MinusIcon.vue":
      require("component-data/vue/vanilla_css/scoped/checkbox/MinusIcon.vue")
        .default,
    ...sharedVueCode,
  },
  visibleFiles: ["/App.vue", "/CheckIcon.vue", "/MinusIcon.vue"],
};
