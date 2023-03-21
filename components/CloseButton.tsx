import { FiX } from "react-icons/fi";

import { IconButton, IconButtonProps } from "./IconButton";

export const CloseButton = (props: IconButtonProps) => (
  <IconButton
    position="absolute"
    top="4"
    right="4"
    icon={<FiX />}
    variant="tertiary"
    size="xs"
    {...props}
  />
);
