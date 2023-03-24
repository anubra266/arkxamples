import {
  Portal,
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from "@ark-ui/react";
import { Fragment } from "react";

import { css, cx } from "design-system/css";
import { select } from "design-system/recipes";

import { ComponentControl } from "components/ComponentControls";

import { STYLE_SOLUTIONS } from "utils/component-config/constants";
import { useComponentConfig } from "utils/useComponentConfig";

import { SelectIcon } from "../SelectIcon";

export function StyleTypeSwitch(props: ComponentControl) {
  const Wrapper = props.norPortal ? Fragment : Portal;

  const { styleType: currentStyleType, styleSolution: currentStyleSolution } =
    useComponentConfig();

  const styleSolution = props.styleSolution ?? currentStyleSolution;
  const styleType = props.styleType ?? currentStyleType;

  const styleTypeOption = STYLE_SOLUTIONS[styleSolution].types.find(
    (opt) => opt.value === styleType
  );
  return (
    <Select
      positioning={{ gutter: 4 }}
      selectedOption={styleTypeOption}
      onChange={props.onChange}
    >
      {({ selectedOption, isOpen }) => (
        <>
          <SelectTrigger>
            <button
              className={cx(select({ size: "xs" }), css({ gap: "1" }))}
              title="Switch Style Type"
            >
              <span>{selectedOption?.label}</span>
              <SelectIcon isOpen={isOpen} />
            </button>
          </SelectTrigger>
          <Wrapper>
            <SelectPositioner className={select({ size: "xs" })}>
              <SelectContent>
                {STYLE_SOLUTIONS[styleSolution].types.map((styleType) => (
                  <SelectOption
                    key={styleType.value}
                    label={styleType.label}
                    value={styleType.value}
                  />
                ))}
              </SelectContent>
            </SelectPositioner>
          </Wrapper>
        </>
      )}
    </Select>
  );
}
