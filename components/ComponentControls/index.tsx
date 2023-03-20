import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@ark-ui/react";
import { Flex, panda, Stack } from "../../design-system/jsx";
import { dialog } from "../../design-system/recipes";
import { FrameworkSwitch } from "../ComponentControls/FrameworkSwitch";
import { StyleSolutionSwitch } from "../ComponentControls/StyleSolutionSwitch";
import { StyleTypeSwitch } from "../ComponentControls/StyleTypeSwitch";
import { CloseButton } from "../CloseButton";

type ComponentControlsProps = {
  component: any;
};
export function ComponentControls(props: ComponentControlsProps) {
  const { component } = props;

  return (
    <Flex
      px="2"
      py="1"
      borderBottomWidth="1px"
      borderColor="border.default"
      align="center"
    >
      <Dialog>
        <DialogTrigger>
          <panda.span fontWeight="medium" fontSize="sm" cursor="pointer">
            {component?.Label}
          </panda.span>
        </DialogTrigger>
        <Portal>
          <DialogBackdrop className={dialog()} />
          <DialogContainer className={dialog()}>
            <DialogContent>
              <Stack gap="8" p="6">
                <Stack gap="1">
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>Dialog Description</DialogDescription>
                </Stack>
                <Stack gap="3" direction="row" width="full">
                  More Content
                </Stack>
              </Stack>
              <DialogCloseTrigger>
                <CloseButton aria-label="Close dialog" size="sm" />
              </DialogCloseTrigger>
            </DialogContent>
          </DialogContainer>
        </Portal>
      </Dialog>

      <Flex ml="auto" gap="1">
        <FrameworkSwitch />
        <StyleSolutionSwitch />
        <StyleTypeSwitch />
      </Flex>
    </Flex>
  );
}
