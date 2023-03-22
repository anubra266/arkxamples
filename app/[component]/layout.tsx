"use client";

import { SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { PropsWithChildren } from "react";

import { arkPackage, templates } from "utils/component-setup/constants";
import { useComponentConfig } from "utils/useComponentConfig";
import { useComponentSetup } from "utils/useComponentSetup";

const ComponentLayout = (
  props: PropsWithChildren & { params: Record<string, string> }
) => {
  const { component: componentId } = props.params;

  const { framework } = useComponentConfig();

  const componentDetails = useComponentSetup(componentId as any);

  return (
    <SandpackProvider
      template={templates[framework]}
      options={{
        visibleFiles: componentDetails.visibleFiles,
      }}
      customSetup={{
        dependencies: {
          ...arkPackage[framework],
        },
      }}
      files={componentDetails.files}
      // Multiple themes suck right now https://github.com/codesandbox/sandpack/issues/849
      // ! Only dark mode for now. It's messing with the page
      theme="dark"
    >
      <SandpackLayout>{props.children}</SandpackLayout>
    </SandpackProvider>
  );
};

export default ComponentLayout;
