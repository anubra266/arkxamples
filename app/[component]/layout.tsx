"use client";

import { SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { PropsWithChildren } from "react";

import { arkPackage, templates } from "utils/component-setup/constants";
import { ComponentId } from "utils/types";
import { useColorMode } from "utils/useColorMode";
import { useComponentConfig } from "utils/useComponentConfig";
import { useComponentSetup } from "utils/useComponentSetup";

const ComponentLayout = (
  props: PropsWithChildren & { params: { component: ComponentId } }
) => {
  const { component: componentId } = props.params;

  const { colorMode } = useColorMode();

  const componentDetails = useComponentSetup(componentId);

  const componentConfig = useComponentConfig();

  if (!componentConfig) return "Loading...";

  const { framework } = componentConfig;

  return (
    <SandpackProvider
      template={templates[framework]}
      options={{
        visibleFiles: componentDetails.visibleFiles,
        bundlerURL:
          framework === "VUE"
            ? undefined
            : "https://sandpack-bundler.pages.dev",
      }}
      customSetup={{
        dependencies: {
          ...arkPackage[framework],
        },
      }}
      files={componentDetails.files}
      theme={colorMode}
    >
      <SandpackLayout>{props.children}</SandpackLayout>
    </SandpackProvider>
  );
};

export default ComponentLayout;
