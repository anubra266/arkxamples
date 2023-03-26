import { SandpackCodeEditor } from "@codesandbox/sandpack-react";

import { Flex } from "design-system/jsx";

import { EditorTabs } from "components/EditorTabs";

import { ComponentId } from "utils/types";

type CodeEditorProps = {
  componentId: ComponentId;
};
export function CodeEditor(props: CodeEditorProps) {
  return (
    <>
      <EditorTabs componentId={props.componentId} />
      <Flex overflow="scroll" direction="column" flex="1">
        <SandpackCodeEditor
          showRunButton={false}
          showLineNumbers
          showTabs={false}
          style={{ height: "100%" }}
        />
      </Flex>
    </>
  );
}
