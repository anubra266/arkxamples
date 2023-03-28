import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import parserPostCSS from "prettier/parser-postcss";
import { ImMagicWand } from "react-icons/im";

import { IconButton } from "components/IconButton";

export const FormatCodeButton = () => {
  const { code, updateCode } = useActiveCode();
  const parser = useCodeParser();

  const runPrettier = () => {
    try {
      const formattedCode = prettier.format(code, {
        parser: parser,
        plugins: [parserBabel, parserPostCSS],
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

function useCodeParser() {
  const { sandpack } = useSandpack();
  if (sandpack.activeFile.endsWith("css")) return "css";
  if (sandpack.activeFile.endsWith("js")) return "babel";
  if (sandpack.activeFile.endsWith("jsx")) return "babel";
  if (sandpack.activeFile.endsWith("tsx")) return "babel";
  // TODO
  if (sandpack.activeFile.endsWith("vue")) return "vue";
}
