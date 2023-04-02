import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import parserHtml from "prettier/parser-html";
import parserPostCSS from "prettier/parser-postcss";

import {
  Framework,
  StyleSolution,
  StyleType,
} from "utils/component-config/constants";
import { components } from "utils/component-setup/constants";
import { ComponentId } from "utils/types";

export const getComponent = (id: ComponentId) =>
  components.find((component) => component.id === id);

export type ComponentSetup = {
  visibleFiles: string[];
  files: Record<string, any>;
};

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

export const formatFiles = (files: Record<string, any>) => {
  return Object.entries(files).reduce(
    (acc, [fileName, code]) => ({
      ...acc,
      [fileName]: formatCode(code, fileName),
    }),
    {}
  );
};

export const formatCode = (code: string, fileName: string) => {
  const parser = getParser(fileName);
  try {
    return prettier.format(code, {
      parser,
      plugins: [parserHtml, parserBabel, parserPostCSS],
      semi: true,
      singleQuote: false,
    });
  } catch (e) {
    console.log("e", e);
    return code;
  }
};

const getParser = (fileName: string) => {
  if (fileName.endsWith("css")) return "css";
  if (fileName.endsWith("js")) return "babel";
  if (fileName.endsWith("jsx")) return "babel";
  if (fileName.endsWith("tsx")) return "babel";
  if (fileName.endsWith("vue")) return "vue";
};
