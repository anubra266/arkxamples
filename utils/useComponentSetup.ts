import { getComponent, getComponentSetup } from "utils/component-setup";
import { ComponentId } from "utils/types";

import { useComponentConfig } from "./useComponentConfig";

export const useComponentSetup = (componentId: ComponentId) => {
  const { framework, styleSolution, styleType } = useComponentConfig();

  const component = getComponent(componentId as any);
  if (!component) {
    // Non existent component. Might want to handle this differently
  }

  const componentDetails = getComponentSetup(
    framework,
    styleSolution,
    styleType,
    componentId
  );

  return componentDetails;
};
