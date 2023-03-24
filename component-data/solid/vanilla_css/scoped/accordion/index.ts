import { sharedSolidCode } from "component-data/solid/shared/wrapper";

export default {
  files: {
    "/styles.css":
      require("!!raw-loader!component-data/react/vanilla_css/scoped/accordion/styles.css")
        .default,
    "/App.tsx": require("./App.js").default,
    "/AccordionIcon.tsx": require("./AccordionIcon.js").default,
    ...sharedSolidCode,
  },
  visibleFiles: ["/App.tsx", "/styles.css", "/AccordionIcon.tsx"],
};
