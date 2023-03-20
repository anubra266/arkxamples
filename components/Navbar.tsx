import { Flex, panda } from "../design-system/jsx";
import { ColorModeButton } from "./ColorModeButton";

export function Navbar() {
  return (
    <Flex px="2" py="1" borderBottomWidth="1px" borderColor="border.default">
      <panda.span fontSize="lg">
        <em>Ark</em>xamples
      </panda.span>
      <Flex ml="auto">
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}
