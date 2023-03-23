import { Splitter, SplitterPanel, SplitterResizeTrigger } from "@ark-ui/react";
import { useId } from "react";

import "./styles.css";

// Ark UI allows us to nest splitters
export default function Page() {
  return (
    <div className="container">
      <BasicSplitter
        orientation="vertical"
        content={<div className="content">Arkxamples 😉</div>}
      >
        <BasicSplitter content={<div className="content">React</div>}>
          <BasicSplitter
            orientation="vertical"
            content={<div className="content">Vue</div>}
          >
            <div className="content">Solid</div>
          </BasicSplitter>
        </BasicSplitter>
      </BasicSplitter>
    </div>
  );
}

const BasicSplitter = (props) => {
  const [first, second] = [useId(), useId()].map((id) => id.replace(/:/g, "-"));
  return (
    <>
      <Splitter
        size={[
          { id: first, size: 50 },
          { id: second, size: 50 },
        ]}
        {...props}
      >
        <SplitterPanel id={first}>{props.content}</SplitterPanel>
        <SplitterResizeTrigger id={`${first}:${second}`}>
          <div />
        </SplitterResizeTrigger>
        <SplitterPanel id={second}>{props.children}</SplitterPanel>
      </Splitter>
    </>
  );
};
