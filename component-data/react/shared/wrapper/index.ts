import { ColorMode } from "utils/useColorMode";

export const getSharedReactCode = (colorMode: ColorMode) => ({
  "/index.css": require("!!raw-loader!./styles.css").default,

  "/index.js": /*javascript*/ `import React, { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./index.css";
  
  import App from "./App";

  function Ab(){
   
  
    return null
  }
  

  

 
  ${`document.body.classList.add("${colorMode}")`}

  


  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
    <Ab />
      <App />
    </StrictMode>
  );
  `,
});
