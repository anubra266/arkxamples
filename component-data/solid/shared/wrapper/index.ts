export const sharedSolidCode = {
  "/index.css":
    require("!!raw-loader!component-data/react/shared/wrapper/styles.css")
      .default,

  "/index.html": /*html*/ `<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="root"></div>
    <script src="src/index.tsx"></script>
  </body>
  </html>`,

  "/index.tsx": /*javascript*/ `import { render } from "solid-js/web";
  import { createEffect } from "solid-js";
  
  import App from "./App";
  
  import "./index.css";
  
  function ColorModeScript() {
    createEffect(() => {
      window.parent.postMessage({ action: "getColorMode" }, "*");
      window.addEventListener("message", function (event) {
        if (event.data.colorMode) {
          switch (event.data.colorMode) {
            case "light":
              document.body.classList.add("light");
              document.body.classList.remove("dark");
              break;
  
            case "dark":
              document.body.classList.add("dark");
              document.body.classList.remove("light");
              break;
  
            default:
              break;
          }
        }
      });
    });
  
    return null;
  }
  
  render(
    () => (
      <>
        <ColorModeScript />
        <App />
      </>
    ),
    document.getElementById("root")
  );
  `,
};
