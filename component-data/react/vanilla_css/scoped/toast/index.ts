import { sharedReactCode } from "component-data/react/shared/wrapper";

export default {
  files: {
    "/styles.css": require("!!raw-loader!./styles.css").default,
    "/App.js": require("./App.js").default,
    "/CloseIcon.js": require("./CloseIcon.js").default,
    ...sharedReactCode,
  },
  visibleFiles: ["/App.js", "/styles.css", "/CloseIcon.js"],
};
