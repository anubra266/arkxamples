import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    lineHeight: 1.5,
    textRendering: "optimizeLegibility",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
    minHeight: "100%",
  },
  body: {
    backgroundColor: "bg.canvas",
    color: "fg.default",
    fontFamily: "'Poppins', sans-serif",
    flexGrow: "1",
    _dark: {
      colorScheme: "dark",
    },
  },
  "html, body": {
    display: "flex",
    flexDirection: "column",
    height: "unset !important",
  },
  "*, *::before, *::after": {
    borderColor: "border.default",
    borderStyle: "solid",
  },
  "*::placeholder": {
    opacity: 1,
    color: "fg.placeholder",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "var(--font-mona-sans), sans-serif",
  },
  a: {
    textDecoration: "none",
  },
  hr: {
    borderBottomWidth: "1px",
  },
  svg: {
    maxW: "unset",
  },
});
