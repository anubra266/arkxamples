import { splitterAnatomy } from "@ark-ui/react";
import { defineParts, defineRecipe } from "@pandacss/dev";

const parts = defineParts(splitterAnatomy.build());

const partDetails = splitterAnatomy.build();
export const splitter = defineRecipe({
  name: "splitter",
  description: "A splitter style",
  base: parts({
    root: {
      width: "full",
      gap: "2",
      '&[data-orientation="horizontal"]': {
        height: "300px",
      },
      '&[data-orientation="vertical"]': {
        width: "800px",
        height: "600px",
        flexDirection: "column",
      },
      [`& ${partDetails.panel.selector}:has(${partDetails.panel.selector})` as any]:
        {
          border: "none",
        },
    },
    panel: {
      display: "flex",
      border: "1px solid lightgray",
      overflow: "auto",
    },
    resizeTrigger: {
      background: "#ebebeb",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s ease-in-out",
      outline: "0",
      position: "relative",
      '&[data-orientation="horizontal"]': {
        margin: "min(1rem, 20%) 0",
        minHeight: "50px",
      },
      '&[data-orientation="vertical"]': {
        minHeight: "1",
        margin: "0 min(1rem, 20%)",
      },

      _before: {
        content: '""',
        position: "absolute",
        background: "#7d7d7d1a",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "block",
        opacity: 0,
        transition: "opacity .4s",
      },
      '&[data-orientation="horizontal"]:hover:before': {
        opacity: 1,
      },
      '&[data-orientation="horizontal"]:before': {
        right: "-10px",
        height: "full",
        width: "2",
      },
      _hover: {
        background: "#7d7d7d1a",
        color: "white",
      },
      _active: {
        background: "#3f51b5",
        color: "white",
      },
      _disabled: {
        opacity: 0.5,
      },
    },
  }),
});
