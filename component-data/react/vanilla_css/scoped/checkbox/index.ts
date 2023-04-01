import { sharedReactCode } from "component-data/react/shared/wrapper";

export default {
  files: {
    "/styles.css": require("!!raw-loader!./styles.css").default,
    "/App.js": require("./App.js").default,
    "/CheckIcon.js": require("./CheckIcon.js").default,
    "/MinusIcon.js": require("./MinusIcon.js").default,
    ...sharedReactCode,
  },
  visibleFiles: ["/App.js", "/styles.css", "/CheckIcon.js", "/MinusIcon.js"],
};
