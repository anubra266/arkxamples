import {
  Framework,
  StyleSolution,
  StyleType,
  defaultConfig,
} from "utils/component-config/constants";
import { components, getComponent } from "utils/componentsData";

export type ComponentId = (typeof components)[number]["id"];

export type ComponentParams = {
  component: ComponentId;
};

export type Component = ReturnType<typeof getComponent>;

export type ComponentConfig = typeof defaultConfig;

export type ConfigValue<V> = V extends "framework"
  ? Framework
  : V extends "styleSolution"
  ? StyleSolution
  : V extends "styleType"
  ? StyleType
  : string;

export type ConfigSetterArg =
  | ComponentConfig
  | ((config: ComponentConfig) => ComponentConfig);
