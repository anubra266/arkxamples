import { UnstyledOpenInCodeSandboxButton } from "@codesandbox/sandpack-react";
import { RxCodesandboxLogo } from "react-icons/rx";

import { css, cx } from "design-system/css";
import { button } from "design-system/recipes";

export const OpenInCodesandboxButton = () => {
  return (
    <UnstyledOpenInCodeSandboxButton
      aria-label="Open in codesandbox"
      className={cx(
        button({ variant: "tertiary", size: "xs" }),
        css({ px: "0" })
      )}
      data-scope="button"
      data-part="root"
    >
      <RxCodesandboxLogo
        aria-hidden="true"
        data-scope="button"
        data-part="icon"
      />
    </UnstyledOpenInCodeSandboxButton>
  );
};
