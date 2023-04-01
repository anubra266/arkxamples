import { styles } from "component-data/react/tailwind/inline/checkbox/styles";
import { sharedSolidCode } from "component-data/solid/shared/wrapper";
import { replaceClassnames } from "component-data/utils";

export default {
  files: {
    "/App.tsx": replaceClassnames(require("./App.js").default, styles),
    "/CheckIcon.tsx":
      require("component-data/solid/vanilla_css/scoped/checkbox/CheckIcon.js")
        .default,
    "/MinusIcon.tsx":
      require("component-data/solid/vanilla_css/scoped/checkbox/MinusIcon.js")
        .default,
    ...sharedSolidCode,
  },
  visibleFiles: ["/App.tsx", "/styles.css", "/CheckIcon.tsx", "/MinusIcon.tsx"],
};
