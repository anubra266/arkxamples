import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { useCopyToClipboard } from "usehooks-ts";

import { IconButton } from "components/IconButton";

export const CopyCodeButton = () => {
  const { code } = useActiveCode();
  const [, copy] = useCopyToClipboard();
  const { sandpack } = useSandpack();

  const title = `Copy ${sandpack.activeFile.split("/")[1]} content`;

  return (
    <IconButton
      aria-label={title}
      title={title}
      onClick={() => copy(code)}
      icon={<HiOutlineClipboardList />}
      variant="tertiary"
      size="xs"
    />
  );
};
