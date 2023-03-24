import { Framework } from "utils/component-config/constants";

export const components = [
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
  { id: "rating-group", label: "Rating Group" },
  { id: "select", label: "Select" },
  { id: "slider", label: "Slider" },
  { id: "splitter", label: "Splitter" },
  { id: "tabs", label: "Tabs" },
  { id: "tags-input", label: "Tags Input" },
  { id: "toast", label: "Toast" },
  { id: "tooltip", label: "Tooltip" },
] as const;

export const arkPackage = {
  [Framework.REACT]: {
    "@ark-ui/react": "0.0.0-rc-20230319215607",
    "react-icons": "latest",
  },
  [Framework.SOLID]: undefined,
  [Framework.VUE]: undefined,
};

export const templates = {
  [Framework.REACT]: "react",
  [Framework.SOLID]: "solid",
  [Framework.VUE]: undefined,
} as const;
