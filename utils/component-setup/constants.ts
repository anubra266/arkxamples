import { Framework, StyleSolution } from "utils/component-config/constants";

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

export const templates = {
  [Framework.REACT]: "react",
  [Framework.SOLID]: "solid",
  [Framework.VUE]: undefined,
} as const;

export const getArkPackage = (
  framework: Framework,
  styleSolution: StyleSolution
) => {
  if (framework === Framework.REACT) {
    const packages = {
      "@ark-ui/react": "latest",
      "react-icons": "latest",
      "react-helmet": "latest",
    };
    switch (styleSolution) {
      case StyleSolution.VANILLA_CSS:
        return packages;

      case StyleSolution.TAILWIND:
        return { ...packages };

      default:
        break;
    }
  } else return;
};
