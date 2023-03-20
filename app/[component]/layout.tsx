"use client";
import { SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";

import { arkPackage, templates, useComponentSetup } from "utils/componentsData";
import { PropsWithChildren } from "react";
import { useComponentConfig } from "utils/useComponentConfig";

const ComponentLayout = (
  props: PropsWithChildren & { params: Record<string, string> }
) => {
  const { component: componentId } = props.params;

  const { framework } = useComponentConfig();

  const componentDetails = useComponentSetup(componentId as any);

  if (!componentDetails) return "select a component";

  return (
    // Multiple themes suck right now https://github.com/codesandbox/sandpack/issues/849
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
      // ! Only dark mode for now. It's messing with the page
      theme="dark"
    >
      <SandpackLayout>{props.children}</SandpackLayout>
    </SandpackProvider>
  );
};

export default ComponentLayout;
