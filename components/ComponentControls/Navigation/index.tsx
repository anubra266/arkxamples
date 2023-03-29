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
import { useRef, useState } from "react";

import { css } from "design-system/css/css";
import { cx } from "design-system/css/cx";
import { Flex, Stack, panda } from "design-system/jsx";
import { dialog } from "design-system/recipes";

import { ComponentControlsProps } from "components/ComponentControls";
import { FrameworkSwitch } from "components/ComponentControls/FrameworkSwitch";
import { Search } from "components/ComponentControls/Navigation/Search";
import { StyleSolutionSwitch } from "components/ComponentControls/StyleSolutionSwitch";
import { StyleTypeSwitch } from "components/ComponentControls/StyleTypeSwitch";

import { setComponentConfig } from "utils/component-config";
import {
  Framework,
  StyleSolution,
  StyleType,
} from "utils/component-config/constants";
import { useComponentConfig, useQueryString } from "utils/useComponentConfig";
import { useComponentsSearch } from "utils/useComponentsSearch";

import { CloseButton } from "../../CloseButton";

const dialogClassName = dialog();

export function Navigation(props: ComponentControlsProps) {
  const { component } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const { framework, styleSolution, styleType } = useComponentConfig();
  const [tempConfig, setTempConfig] = useState({
    framework,
    styleSolution,
    styleType,
  });

  const uriQuery = useQueryString(tempConfig);

  const componentSearch = useComponentsSearch();

  const onDialogClose = () => {
    componentSearch.setQuery("");
  };

  return (
    <Dialog initialFocusEl={() => inputRef.current} onClose={onDialogClose}>
      {({ close: closeDialog }) => (
        <>
          <DialogTrigger>
            <panda.span
              paddingBottom="1"
              borderBottomWidth="1px"
              borderColor={{ _dark: "purple.400" }}
              fontWeight="medium"
              fontSize="sm"
              cursor="pointer"
              _hover={{
                color: { base: "", _dark: "purple.400" },
              }}
            >
              {component?.label ?? "Components"}
            </panda.span>
          </DialogTrigger>
          <Portal>
            <DialogBackdrop className={dialogClassName} />
            <DialogContainer
              className={cx(
                dialogClassName,
                css({
                  alignItems: "start",
                  paddingTop: "12",
                })
              )}
            >
              <DialogContent
                className={css({
                  width: "2xl",
                })}
              >
                <Stack gap="6" p="6">
                  <Stack gap="1">
                    <DialogTitle>
                      <em>Arkx</em>amples
                    </DialogTitle>
                    <DialogDescription>
                      Select an{" "}
                      <a target="_blank" href="https://ark-ui.com">
                        ark-ui
                      </a>{" "}
                      component; with your preferred configuration.
                    </DialogDescription>
                  </Stack>
                  <Flex gap="1">
                    <FrameworkSwitch
                      {...tempConfig}
                      norPortal
                      onChange={(opt) => {
                        setComponentConfig(
                          "framework",
                          opt?.value as Framework,
                          setTempConfig
                        );
                      }}
                    />
                    <StyleSolutionSwitch
                      {...tempConfig}
                      norPortal
                      onChange={(opt) => {
                        setComponentConfig(
                          "styleSolution",
                          opt?.value as StyleSolution,
                          setTempConfig
                        );
                      }}
                    />
                    <StyleTypeSwitch
                      {...tempConfig}
                      styleSolution={tempConfig.styleSolution}
                      norPortal
                      onChange={(opt) => {
                        setComponentConfig(
                          "styleType",
                          opt?.value as StyleType,
                          setTempConfig
                        );
                      }}
                    />
                  </Flex>

                  <Search
                    {...componentSearch}
                    inputRef={inputRef}
                    uriQuery={uriQuery}
                    closeDialog={closeDialog}
                  />
                </Stack>
                <DialogCloseTrigger>
                  <CloseButton aria-label="Close dialog" />
                </DialogCloseTrigger>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
  );
}
