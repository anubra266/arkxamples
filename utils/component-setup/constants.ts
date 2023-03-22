import { Framework } from "utils/component-config/constants";

export const components = [
  //
  { id: "accordion", label: "Accordion" },
  { id: "checkbox", label: "Checkbox" },
  //
] as const;

export const arkPackage = {
  [Framework.REACT]: {
    "@ark-ui/react": "0.0.0-rc-20230319215607",
    "react-icons": "latest",
  },
  [Framework.VUE_JSX]: { "@ark-ui/vue": "latest" },
  [Framework.VUE_SFC]: { "@ark-ui/vue": "latest" },
  [Framework.SOLID]: { "@ark-ui/solid": "latest" },
};

export const templates = {
  [Framework.REACT]: "react",
  [Framework.VUE_JSX]: "react",
  [Framework.VUE_SFC]: "react",
  [Framework.SOLID]: "react",
} as const;
