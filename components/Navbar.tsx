import { BsGithub } from "react-icons/bs";

import { Flex, panda } from "design-system/jsx";

import { IconButton } from "components/IconButton";

import { ColorModeButton } from "./ColorModeButton";

export function Navbar() {
  return (
    <Flex
      px="2"
      py="1"
      align="center"
      borderBottomWidth="1px"
      borderColor="border.default"
    >
      <panda.span fontSize="lg" fontWeight="medium" color="fg.default">
        <em>Ark</em>xamples
      </panda.span>
      <Flex ml="auto" gap="2">
        <a href="https://github.com/anubra266/arkxamples" target="_blank">
          <IconButton
            aria-label="Open Github Repo"
            title="Open Github Repo"
            icon={<BsGithub />}
            variant="tertiary"
            size="xs"
          />
        </a>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}
