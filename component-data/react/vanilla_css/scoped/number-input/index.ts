import { sharedReactCode } from "component-data/react/shared/wrapper";

export default {
  files: {
    "/styles.css": require("!!raw-loader!./styles.css").default,
    "/App.js": require("./App.js").default,
    "/ChevronUpIcon.js": require("./ChevronUpIcon.js").default,
    "/ChevronDownIcon.js": require("./ChevronDownIcon.js").default,
    ...sharedReactCode,
  },
  visibleFiles: [
    "/App.js",
    "/styles.css",
    "/ChevronUpIcon.js",
    "/ChevronDownIcon.js",
  ],
};
