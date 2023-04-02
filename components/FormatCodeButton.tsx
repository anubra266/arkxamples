import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { ImMagicWand } from "react-icons/im";

import { IconButton } from "components/IconButton";

import { formatCode } from "utils/component-setup";

export const FormatCodeButton = () => {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  const runPrettier = () => {
    const formattedCode = formatCode(code, sandpack.activeFile);
    updateCode(formattedCode);
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
