export const sharedSolidCode = {
  "/index.css":
    require("!!raw-loader!component-data/react/shared/wrapper/index.css")
      .default,

  "/vite.config.ts": require("./vite.config.js").default,
  "/vite-env.d.ts": `/// <reference types="vite/client" />`,

  "/tsconfig.json": `{
    "compilerOptions": {
      "target": "ESNext",
      "useDefineForClassFields": true,
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "allowJs": false,
      "skipLibCheck": true,
      "esModuleInterop": false,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "preserve",
      "jsxImportSource": "solid-js"
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
  `,
  "/tsconfig.node.json": `{
    "compilerOptions": {
      "composite": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "allowSyntheticDefaultImports": true,
      "jsx": "preserve"
    },
    "include": ["vite.config.ts", "src/entry-server.tsx", "src/vite-env.d.ts"]
  }
  `,

  "/package.json": `{
    "name": "vite-project",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "start": "vite",
      "dev": "vite",
      "build": "vite build",
      "serve": "vite preview"
    },
    "dependencies": {
      "@ark-ui/solid": "0.0.0-rc-20230319215607",
      "solid-js": "^1.6.4",
      "solid-icons": "latest",
      "@solid-primitives/script-loader": "latest"
    },
    "devDependencies": {
      "vite": "^4.0.0",
      "vite-plugin-solid": "^2.5.0"
    }
  }
  `,

  "/index.html": require("!!raw-loader!./index.html").default,

  "/index.tsx": /*javascript*/ `import { render } from "solid-js/web";
  import { createEffect } from "solid-js";
  import { createScriptLoader } from "@solid-primitives/script-loader";
  
  import App from "./App";
  
  import "./index.css";

  createScriptLoader({
    src: "https://cdn.tailwindcss.com",
    async onLoad() {
      tailwind.config = {
        darkMode: "class"
      }
    },
  });
  
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
    document.getElementById("root") as HTMLElement
  );
  `,
};
