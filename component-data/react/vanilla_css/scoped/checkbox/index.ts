import { sharedReactCode } from "component-data/react/shared/wrapper";
import { vanillaScopedTransform } from "component-data/utils";

export const checkbox = {
  files: {
    "/styles.css": require("!!raw-loader!./styles.css").default,
    "/App.js": require("./App.js").default,
    "/CheckIcon.js": require("./CheckIcon.js").default,
    "/MinusIcon.js": require("./MinusIcon.js").default,
    ...sharedReactCode,
  },
  visibleFiles: ["/App.js", "/styles.css", "/CheckIcon.js", "/MinusIcon.js"],
};
export default vanillaScopedTransform(checkbox);
