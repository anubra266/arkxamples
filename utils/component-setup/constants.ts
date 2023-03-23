import { Framework } from "utils/component-config/constants";

export const components = [
  //
  { id: "accordion", label: "Accordion" },
  { id: "checkbox", label: "Checkbox" },
  { id: "dialog", label: "Dialog" },
  { id: "hover-card", label: "Hover Card" },
  { id: "menu", label: "Menu" },
  { id: "number-input", label: "Number Input" },
  { id: "pagination", label: "Pagination" },
  { id: "pin-input", label: "Pin Input" },
  { id: "popover", label: "Popover" },
  { id: "radio-group", label: "Radio Group" },
  { id: "range-slider", label: "Range Slider" },

  { id: "slider", label: "Slider" },
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
  // [Framework.VUE_JSX]: "",
  // [Framework.VUE_SFC]: "",
  // [Framework.SOLID]: "",
} as const;
