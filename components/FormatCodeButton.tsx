import { useActiveCode } from "@codesandbox/sandpack-react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { ImMagicWand } from "react-icons/im";

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
      size="xs"
    />
  );
};
