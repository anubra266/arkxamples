import {
  Framework,
  StyleSolution,
  StyleType,
} from "utils/component-config/constants";
import { components } from "utils/component-setup/constants";
import { ComponentId } from "utils/types";

export const getComponent = (id: ComponentId) =>
  components.find((component) => component.id === id);

type ComponentSetup = { visibleFiles: string[]; files: Record<string, any> };

export const getComponentSetup = (
  framework: Framework,
  styleSolution: StyleSolution,
  styleType: StyleType,
  componentId: ComponentId
): ComponentSetup | undefined => {
  try {
    const details =
      require(`component-data/${framework.toLocaleLowerCase()}/${styleSolution.toLocaleLowerCase()}/${styleType.toLocaleLowerCase()}/${componentId}`).default;
    return details;
  } catch (error) {
    const details =
      require(`component-data/${framework.toLocaleLowerCase()}/shared/404`).default;
    return details;
  }
};
