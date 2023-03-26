"use client";

import { Splitter, SplitterPanel, SplitterResizeTrigger } from "@ark-ui/react";
import { SandpackPreview } from "@codesandbox/sandpack-react";

import { css, cx } from "design-system/css";
import { panda } from "design-system/jsx";
import { splitter } from "design-system/recipes";

import { CodeEditor } from "components/CodeEditor";
import { ComponentControls } from "components/ComponentControls";
import { Navbar } from "components/Navbar";

import { getComponent } from "utils/component-setup";
import { ComponentParams } from "utils/types";
import { useSyncSandboxColorMode } from "utils/useSyncSandboxColorMode";

export default function Component(props: { params: ComponentParams }) {
  const { component: componentId } = props.params;
  const component = getComponent(componentId as any);

  useSyncSandboxColorMode();

  return (
    <>
      <Splitter
        size={[
          { id: "preview", size: 50 },
          { id: "controls", size: 50 },
        ]}
        className={cx(
          splitter(),
          css({
            gap: "0",
            '& [data-part="panel"]': {
              height: "100vh",
              border: "none",
            },
          })
        )}
      >
        <SplitterPanel id="preview">
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </SplitterPanel>
        <SplitterResizeTrigger id="preview:controls">
          <panda.div
            background="transparent"
            borderLeftWidth="1px"
            margin={0}
            borderRadius="0"
          />
        </SplitterResizeTrigger>
        <SplitterPanel
          id="controls"
          className={css({
            flexDir: "column",
            background: { base: "white", _dark: "#111" },
          })}
        >
          <Navbar />
          <ComponentControls component={component} />
          <CodeEditor componentId={componentId} />
        </SplitterPanel>
      </Splitter>
    </>
  );
}
