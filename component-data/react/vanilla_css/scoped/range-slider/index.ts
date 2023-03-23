import { sharedReactCode } from "component-data/react/shared/wrapper";

export default {
  files: {
    "/styles.css": require("!!raw-loader!../slider/styles.css").default,
    "/App.js": require("!!raw-loader!./App.js").default,
    ...sharedReactCode,
  },
  visibleFiles: ["/App.js", "/styles.css"],
};
