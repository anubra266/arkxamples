import { getSharedReactCode } from "component-data/react/shared/wrapper";
import { ColorMode } from "utils/useColorMode";

export default function (colorMode: ColorMode) {
  return {
    files: {
      "/styles.css": require("!!raw-loader!./styles.css").default,
      "/App.js": require("!!raw-loader!./App.js").default,
      ...getSharedReactCode(colorMode),
    },
    visibleFiles: ["/App.js", "/styles.css"],
  };
}
