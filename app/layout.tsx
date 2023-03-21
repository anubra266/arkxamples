"use client";
import { cx } from "@/panda/css";
import { Fira_Code, Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import { getSandpackCssText } from "@codesandbox/sandpack-react";

import "../index.css";

import { ColorModeScript } from "components/ColorModeScript";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" className={cx(inter.variable, firaCode.variable)}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <style
          dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
          id="sandpack"
          key="sandpack-css"
        />
        <ColorModeScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
