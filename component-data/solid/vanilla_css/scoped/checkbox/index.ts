import { sharedSolidCode } from "component-data/solid/shared/wrapper";

export default {
  files: {
    "/styles.css":
      require("!!raw-loader!component-data/react/vanilla_css/scoped/checkbox/styles.css")
        .default,
    "/App.tsx": require("!!raw-loader!./App.js").default,
    ...sharedSolidCode,
  },
  visibleFiles: ["/App.tsx", "/styles.css"],
};
