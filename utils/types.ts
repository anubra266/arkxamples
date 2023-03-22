import {
  Framework,
  StyleSolution,
  StyleType,
  defaultConfig,
} from "utils/component-config/constants";
import { getComponent } from "utils/component-setup";
import { components } from "utils/component-setup/constants";

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
