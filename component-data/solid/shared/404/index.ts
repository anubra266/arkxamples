import { sharedSolidCode } from "component-data/solid/shared/wrapper";

export default {
  files: {
    "/App.tsx": /*javascript*/ `
const App = () => {
  return (
    <div>
      <h1>No example for this yet.</h1>
      <h3>Feel free to contribute</h3>
    </div>
  );
};

export default App;
`,

    "/styles.css":
      require("!!raw-loader!component-data/react/shared/404/styles.css")
        .default,
    ...sharedSolidCode,
  },
  visibleFiles: ["/App.tsx", "/styles.css"],
};
