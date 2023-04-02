"use client";

import { SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { PropsWithChildren } from "react";

import { formatFiles } from "utils/component-setup";
import { getArkPackage, templates } from "utils/component-setup/constants";
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

  const { framework, styleSolution } = componentConfig;

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
          ...getArkPackage(framework, styleSolution),
        },
      }}
      files={formatFiles(componentDetails.files)}
      theme={colorMode}
    >
      <SandpackLayout>{props.children}</SandpackLayout>
    </SandpackProvider>
  );
};

export default ComponentLayout;
