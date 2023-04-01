import { sharedReactCode } from "component-data/react/shared/wrapper";
import { styles } from "component-data/react/tailwind/inline/checkbox/styles";
import { replaceClassnames } from "component-data/utils";

export default {
  files: {
    "/App.js": replaceClassnames(require("./App.js").default, styles),
    "/CheckIcon.js":
      require("component-data/react/vanilla_css/scoped/checkbox/CheckIcon.js")
        .default,
    "/MinusIcon.js":
      require("component-data/react/vanilla_css/scoped/checkbox/MinusIcon.js")
        .default,
    ...sharedReactCode,
  },
  visibleFiles: ["/App.js", "/CheckIcon.js", "/MinusIcon.js"],
};
