import {
  STYLE_SOLUTIONS,
  StyleSolution,
} from "utils/component-config/constants";
import { ComponentConfig, ConfigSetterArg, ConfigValue } from "utils/types";

export const setComponentConfig = <K extends keyof ComponentConfig>(
  key: K,
  value: ConfigValue<K>,
  setConfig: (newConfigOrConfigFn: ConfigSetterArg) => void
) => {
  if (key === "styleSolution") {
    setConfig((config) => ({
      ...config,
      [key]: value,
      styleType: Object.values(STYLE_SOLUTIONS[value as StyleSolution].types)[0]
        .value,
    }));
    return;
  }

  setConfig((config) => ({
    ...config,
    [key]: value,
  }));
};
