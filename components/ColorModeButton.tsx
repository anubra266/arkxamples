"use client";

import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useColorMode } from "../utils/useColorMode";
import { IconButton } from "./IconButton";

export const ColorModeButton = () => {
  const { toggle, colorMode } = useColorMode();
  return (
    <>
      <IconButton
        variant="link"
        aria-label={`Switch to ${colorMode === "light" ? "Dark" : "Light"}`}
        size="xs"
        // color="fg.subtle"
        // bg="bg.subtle"
        icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
        onClick={toggle}
      />
    </>
  );
};
