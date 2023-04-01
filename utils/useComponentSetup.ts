import { getComponent, getComponentSetup } from "utils/component-setup";
import { ComponentId } from "utils/types";

import { useComponentConfig } from "./useComponentConfig";

export const useComponentSetup = (componentId: ComponentId) => {
  const config = useComponentConfig();
  if (!config) return;
  const { framework, styleSolution, styleType } = config;

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
