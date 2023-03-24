import { sharedSolidCode } from "component-data/solid/shared/wrapper";

export default {
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
