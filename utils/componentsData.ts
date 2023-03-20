import { ColorMode, useColorMode } from "utils/useColorMode";
import {
  Framework,
  StyleSolution,
  StyleType,
  useComponentConfig,
} from "./useComponentConfig";

export const components = [{ id: "checkbox", Label: "Checkbox" }] as const;

export type ComponentId = (typeof components)[number]["id"];

export const getComponent = (id: ComponentId) =>
  components.find((component) => component.id === id);

export const arkPackage = {
  [Framework.REACT]: { "@ark-ui/react": "0.0.0-rc-20230319215607" },
  [Framework.VUE_JSX]: { "@ark-ui/vue": "latest" },
  [Framework.VUE_SFC]: { "@ark-ui/vue": "latest" },
  [Framework.SOLID]: { "@ark-ui/solid": "latest" },
};

type ComponentSetup = { visibleFiles: string[]; files: Record<string, any> };

export const getComponentSetup = (
  framework: Framework,
  styleSolution: StyleSolution,
  styleType: StyleType,
  componentId: ComponentId,
  colorMode: ColorMode
): ComponentSetup | undefined => {
  try {
    const details =
      require(`component-data/${framework.toLocaleLowerCase()}/${styleSolution.toLocaleLowerCase()}/${styleType.toLocaleLowerCase()}/${componentId}`).default(
        colorMode
      );
    return details;
  } catch (error) {
    const details =
      require(`component-data/${framework.toLocaleLowerCase()}/shared/404`).default(
        colorMode
      );
    return details;
  }
};

export const templates = {
  [Framework.REACT]: "react",
  [Framework.VUE_JSX]: "react",
  [Framework.VUE_SFC]: "react",
  [Framework.SOLID]: "react",
} as const;

export const useComponentSetup = (componentId: ComponentId) => {
  const { framework, styleSolution, styleType } = useComponentConfig();
  const { colorMode } = useColorMode();

  const component = getComponent(componentId as any);
  if (!component) return null;

  const componentDetails = getComponentSetup(
    framework,
    styleSolution,
    styleType,
    componentId,
    colorMode
  );

  return componentDetails;
};
