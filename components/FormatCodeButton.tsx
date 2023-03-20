import { Flex, panda } from "design-system/jsx";
import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { ComponentId, useComponentSetup } from "utils/componentsData";

import { ImMagicWand } from "react-icons/im";

import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { IconButton } from "components/IconButton";

export const FormatCodeButton = () => {
  const { code, updateCode } = useActiveCode();

  const runPrettier = () => {
    try {
      const formattedCode = prettier.format(code, {
        parser: "babel",
        plugins: [parserBabel],
        semi: true,
        singleQuote: false,
      });

      updateCode(formattedCode);
    } catch {}
  };

  return (
    <IconButton
      aria-label="Format code"
      title="Format code"
      onClick={runPrettier}
      icon={<ImMagicWand />}
      variant="tertiary"
      //   size="sm"
    />
  );
};
