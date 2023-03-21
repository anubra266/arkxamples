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
import { CgHashtag } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";

import { css } from "design-system/css/css";
import { cx } from "design-system/css/cx";
import { Flex, Stack, panda } from "design-system/jsx";
import { dialog, input } from "design-system/recipes";

import { ComponentControlsProps } from "components/ComponentControls";
import { FrameworkSwitch } from "components/ComponentControls/FrameworkSwitch";
import { StyleSolutionSwitch } from "components/ComponentControls/StyleSolutionSwitch";
import { StyleTypeSwitch } from "components/ComponentControls/StyleTypeSwitch";
import { LinkBox, LinkOverlay } from "components/LinkOverlay";

import { setComponentConfig } from "utils/component-config";
import {
  Framework,
  StyleSolution,
  StyleType,
} from "utils/component-config/constants";
import { useComponentConfig, useQueryString } from "utils/useComponentConfig";
import { useComponentsSearch } from "utils/useComponentsSearch";

import { CloseButton } from "../CloseButton";

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

  const { query, setQuery, filteredComponents, emptyResult } =
    useComponentsSearch();

  const onDialogClose = () => {
    setQuery("");
  };

  return (
    <Dialog initialFocusEl={() => inputRef.current} onClose={onDialogClose}>
      {({ close }) => (
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
                  <Stack gap="3" width="full">
                    <Flex gap="1">
                      <FrameworkSwitch
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

                    <input
                      ref={inputRef}
                      className={input()}
                      placeholder="Search components..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </Stack>
                  {emptyResult ? (
                    <panda.span textAlign="center" fontSize="sm" width="full">
                      Can&apos;t find that component. Perharps an{" "}
                      <b>invention</b> of yours? 🧐
                    </panda.span>
                  ) : null}
                  <Stack w="full" gap="3">
                    {filteredComponents.map((comp) => (
                      <LinkBox
                        key={comp.id}
                        onClick={close}
                        display="flex"
                        p="4"
                        borderRadius="lg"
                        w="full"
                        cursor="pointer"
                        alignItems="center"
                        gap="2"
                        className={cx(
                          "group",
                          css({
                            color: { base: "#373A35", _dark: "gray.200" },
                            bg: { base: "lightGrey", _dark: "gray.800" },
                            _hover: {
                              color: { base: "white", _dark: "white" },
                              bg: { base: "purple.800", _dark: "purple.500" },
                            },
                          })
                        )}
                        transition="all 0.3s ease"
                      >
                        <Flex
                          borderRadius="lg"
                          borderWidth="1.5px"
                          p="1.5"
                          shadow={{ base: "xs", _dark: "none" }}
                          borderColor={{
                            base: "rgba(139, 92, 246, 0.07)",
                            _dark: "gray.700",
                          }}
                          _groupHover={{
                            color: { base: "white", _dark: "white" },
                            borderColor: { base: "purple.400" },
                          }}
                          transition="all 0.3s ease"
                        >
                          <CgHashtag />
                        </Flex>
                        <LinkOverlay
                          fontSize="lg"
                          fontWeight="medium"
                          letterSpacing="wide"
                          href={`${comp.id}${uriQuery}`}
                        >
                          {comp.label}
                        </LinkOverlay>

                        <panda.span
                          fontSize="xs"
                          ml="auto"
                          color={{
                            base: "black",
                            _dark: "white",
                            _groupHover: "white",
                          }}
                          transition="all 0.3s ease"
                        >
                          <FaChevronRight />
                        </panda.span>
                      </LinkBox>
                    ))}
                  </Stack>
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
