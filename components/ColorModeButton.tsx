"use client";

import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { useIsClient } from "usehooks-ts";

import { css } from "design-system/css/css";
import { cx } from "design-system/css/cx";
import { button } from "design-system/recipes";

import { useColorMode } from "utils/useColorMode";

export const ColorModeButton = () => {
  const { toggle, colorMode } = useColorMode();

  const isClient = useIsClient();
  // prevent false positive for server-side rendering
  if (!isClient) {
    return null;
  }
  return (
    <Expand
      onToggle={toggle}
      toggled={colorMode === "light"}
      className={cx(
        button({ variant: "tertiary", size: "xs" }),
        css({
          fontSize: "lg",
          px: "0",
        })
      )}
      data-scope="button"
      data-part="root"
    />
  );
};
