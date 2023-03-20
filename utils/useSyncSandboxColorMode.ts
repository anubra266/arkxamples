import { useSandpack } from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import { useColorMode } from "utils/useColorMode";

export const useSyncSandboxColorMode = () => {
  const { colorMode } = useColorMode();
  const { sandpack } = useSandpack();

  useEffect(() => {
    const sender = () => {
      Object.values(sandpack.clients).forEach((client) => {
        client.iframe.contentWindow.postMessage({ colorMode }, "*");
      });
    };

    sender();

    const listener = window.addEventListener("message", function (event) {
      if (event.data.action === "getColorMode") {
        sender();
      }
    });

    return () => {
      window.removeEventListener("message", listener as any);
    };
  }, [colorMode, sandpack.clients]);
};
