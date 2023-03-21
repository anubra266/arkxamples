"use client";

import { cloneElement, isValidElement } from "react";

import { css, cx } from "design-system/css";
import { type HTMLPandaProps, panda } from "design-system/jsx";
import { type ButtonVariants, button } from "design-system/recipes";

export type IconButtonProps = HTMLPandaProps<"button"> &
  ButtonVariants & { icon?: React.ReactElement; "aria-label": string };

export const IconButton = (props: IconButtonProps) => {
  const { icon, variant, size, children, ...rest } = props;

  const element = icon || children;
  const _children = isValidElement(element)
    ? cloneElement(element, {
        // @ts-expect-error typings are wrong
        "aria-hidden": true,
        "data-scope": "button",
        "data-part": "icon",
        focusable: false,
      })
    : null;

  return (
    <panda.button
      className={cx(button({ variant, size }), css({ px: "0" }))}
      {...rest}
      data-scope="button"
      data-part="root"
    >
      {_children}
    </panda.button>
  );
};
