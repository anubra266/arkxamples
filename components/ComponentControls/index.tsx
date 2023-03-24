import { SelectProps } from "@ark-ui/react";

import { Flex } from "design-system/jsx";

import { Navigation } from "components/ComponentControls/Navigation";

import {
  Framework,
  StyleSolution,
  StyleType,
} from "utils/component-config/constants";
import { Component } from "utils/types";
import { useComponentConfig } from "utils/useComponentConfig";

import { FrameworkSwitch } from "../ComponentControls/FrameworkSwitch";
import { StyleSolutionSwitch } from "../ComponentControls/StyleSolutionSwitch";
import { StyleTypeSwitch } from "../ComponentControls/StyleTypeSwitch";

export type ComponentControlsProps = {
  component: Component;
};

export type ComponentControl = {
  onChange: SelectProps["onChange"];
  norPortal?: boolean;
  framework?: Framework;
  styleSolution?: StyleSolution;
  styleType?: StyleType;
};
export function ComponentControls(props: ComponentControlsProps) {
  const { setComponentConfig } = useComponentConfig();

  return (
    <Flex
      px="2"
      py="1"
      borderBottomWidth="1px"
      borderColor="border.default"
      align="center"
    >
      <Navigation {...props} />

      <Flex ml="auto" gap="1">
        <FrameworkSwitch
          onChange={(opt) => {
            setComponentConfig("framework", opt?.value as Framework);
          }}
        />
        <StyleSolutionSwitch
          onChange={(opt) => {
            setComponentConfig("styleSolution", opt?.value as StyleSolution);
          }}
        />
        <StyleTypeSwitch
          onChange={(opt) => {
            setComponentConfig("styleType", opt?.value as StyleType);
          }}
        />
      </Flex>
    </Flex>
  );
}
