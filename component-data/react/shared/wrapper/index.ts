export const sharedReactCode = {
  "/index.css": require("!!raw-loader!./index.css").default,

  "/index.js": /*javascript*/ `
  import React, { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import { Helmet } from "react-helmet";
  import "./index.css";
  
  import App from "./App";
  
  function ColorModeScript() {
    React.useEffect(() => {
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
    }, []);
    return (
      <Helmet>
        <script
          onload="tailwindLoaded()"
          src="https://cdn.tailwindcss.com"
        ></script>
        <script>
          {\`function tailwindLoaded(){
            tailwind.config = {
              darkMode: "class"
            }
          }\`}
        </script>
      </Helmet>
    );
  }
  
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  );
  
  `,
};
