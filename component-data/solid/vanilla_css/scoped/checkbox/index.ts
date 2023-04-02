import { sharedSolidCode } from "component-data/solid/shared/wrapper";
import { vanillaScopedTransform } from "component-data/utils";

export const checkbox = {
  files: {
    "/styles.css":
      require("!!raw-loader!component-data/react/vanilla_css/scoped/checkbox/styles.css")
        .default,
    "/App.tsx": require("./App.js").default,
    "/CheckIcon.tsx": require("./CheckIcon.js").default,
    "/MinusIcon.tsx": require("./MinusIcon.js").default,
    ...sharedSolidCode,
  },
  visibleFiles: ["/App.tsx", "/styles.css", "/CheckIcon.tsx", "/MinusIcon.tsx"],
};

export default vanillaScopedTransform(checkbox);
