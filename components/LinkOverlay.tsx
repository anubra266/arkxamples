import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

import { css, cx } from "design-system/css";
import { HTMLPandaProps, panda } from "design-system/jsx";

const PandaLink = panda(Link);

export interface LinkOverlayProps extends Omit<HTMLPandaProps<"a">, "href"> {
  href: LinkProps["href"];
  /**
   *  If `true`, the link will open in new tab
   *
   * @default false
   */
  isExternal?: boolean;
}

export const LinkOverlay = forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  function LinkOverlay(props, ref) {
    const { isExternal, target, rel, className, ...rest } = props;
    return (
      <PandaLink
        {...rest}
        ref={ref}
        className={cx(
          "linkbox__overlay",
          className,
          css({
            position: "static",
            color: "inherit",
            "&::before": {
              content: "''",
              cursor: "inherit",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              width: "100%",
              height: "100%",
            },
          })
        )}
        rel={isExternal ? "noopener noreferrer" : rel}
        target={isExternal ? "_blank" : target}
      />
    );
  }
);

export interface LinkBoxProps extends HTMLPandaProps<"div"> {}

/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
export const LinkBox = forwardRef<HTMLDivElement, LinkBoxProps>(
  function LinkBox(props, ref) {
    const { className, ...rest } = props;

    return (
      <panda.div
        ref={ref}
        position="relative"
        {...rest}
        className={cx(
          className,
          css({
            /* Elevate the links and abbreviations up */
            "& a[href]:not(.linkbox__overlay), & abbr[title]": {
              position: "relative",
              zIndex: 1,
            },
          })
        )}
      />
    );
  }
);
