import { ComponentSetup } from "utils/component-setup";

export const replaceClassnames = (
  code: string,
  styles: Record<string, string>
) => {
  Object.entries(styles).forEach(([key, classes]) => {
    if (!code.includes(key)) return code;

    if (!classes) {
      code = code.replaceAll(
        new RegExp(`\\s(className=|class=)(['"])(${key})*\\2`, "g"),
        ""
      );
    }

    code = code.replaceAll(`"${key}"`, classes);
  });

  return code;
};

const stripExternalCSS = (code: string) =>
  code.replace('import "./styles.css";', "");

const stripClassnames = (code: string) =>
  code.replaceAll(/\s(className=|class=)(['"])[^'"]*\2/g, "");

export const vanillaScopedTransform = (setup: ComponentSetup) => {
  return {
    ...setup,
    files: Object.entries(setup.files).reduce(
      (acc, [fileName, code]) => ({
        ...acc,
        [fileName]: stripClassnames(code),
      }),
      {}
    ),
  };
};

export const tailwindInlineTransform = (
  setup: ComponentSetup,
  styles: Record<string, any> = {}
): ComponentSetup => {
  return {
    ...setup,
    files: Object.entries(setup.files).reduce(
      (acc, [fileName, code]) => ({
        ...acc,
        [fileName]: replaceClassnames(stripExternalCSS(code), styles),
      }),
      {}
    ),
    visibleFiles: setup.visibleFiles.filter((f) => !f.includes("styles.css")),
  };
};
