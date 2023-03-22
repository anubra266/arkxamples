import { useSandpack } from "@codesandbox/sandpack-react";

import { Flex, panda } from "design-system/jsx";

import { CopyCodeButton } from "components/CopyCodeButton";
import { FormatCodeButton } from "components/FormatCodeButton";
import { OpenInCodesandboxButton } from "components/OpenInCodesandboxButton";

import { ComponentId } from "utils/types";
import { useComponentSetup } from "utils/useComponentSetup";

type EditorTabsProps = {
  componentId: ComponentId;
};
export const EditorTabs = ({ componentId }: EditorTabsProps) => {
  const componentDetails = useComponentSetup(componentId as any);

  const { sandpack } = useSandpack();
  const { activeFile, setActiveFile } = sandpack;

  return (
    <panda.div
      borderBottom="1px solid var(--sp-colors-surface2)"
      background="var(--sp-colors-surface1)"
      translate="no"
    >
      <Flex
        aria-label="Select active file"
        padding="0 var(--sp-space-2)"
        overflow="auto"
        wrap="nowrap"
        align="stretch"
        minH="40px"
        marginBottom="-1px"
        role="tablist"
      >
        {componentDetails.visibleFiles.map((fileName) => (
          <panda.button
            key={fileName}
            onClick={() => setActiveFile(fileName)}
            aria-selected={fileName === activeFile}
            data-active={fileName === activeFile ? "" : undefined}
            color={{
              base: "var(--sp-colors-clickable)",
              _hover: "var(--sp-colors-hover)",
              _active: "var(--sp-colors-accent)",
            }}
            padding="0 var(--sp-space-2)"
            height="var(--sp-layout-headerHeight)"
            whiteSpace="nowrap"
            appearance="none"
            outline="none"
            display="flex"
            alignItems="center"
            background="transparent"
            transition="color var(--sp-transitions-default), background var(--sp-transitions-default)"
            cursor="pointer"
            border="0px"
            textDecoration="none"
            role="tab"
            title={fileName}
            type="button"
          >
            {fileName.split("/")[1]}
          </panda.button>
        ))}

        <Flex align="center" ml="auto" gap="1">
          <CopyCodeButton />
          <OpenInCodesandboxButton />
          <FormatCodeButton />
        </Flex>
      </Flex>
    </panda.div>
  );
};
