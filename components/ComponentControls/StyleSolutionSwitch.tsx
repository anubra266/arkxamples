import { select } from "../../design-system/recipes";
import {
  Portal,
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from "@ark-ui/react";

import { useComponentConfig } from "../../utils/useComponentConfig";
import { STYLE_SOLUTIONS } from "utils/component-config/constants";
import { SelectIcon } from "../SelectIcon";
import { css, cx } from "../../design-system/css";
import { ComponentControl } from "components/ComponentControls";
import { Fragment } from "react";

export function StyleSolutionSwitch(props: ComponentControl) {
  const Wrapper = props.norPortal ? Fragment : Portal;
  const { styleSolution } = useComponentConfig();

  return (
    <Select
      positioning={{ gutter: 4 }}
      defaultValue={STYLE_SOLUTIONS[styleSolution]}
      onChange={props.onChange}
    >
      {({ selectedOption, isOpen }) => (
        <>
          <SelectTrigger>
            <button
              className={cx(select({ size: "xs" }), css({ gap: "1" }))}
              title="Switch Style Solution"
            >
              <span>{selectedOption?.label}</span>
              <SelectIcon isOpen={isOpen} />
            </button>
          </SelectTrigger>
          <Wrapper>
            <SelectPositioner className={select({ size: "xs" })}>
              <SelectContent>
                {Object.values(STYLE_SOLUTIONS).map((styleSolution) => (
                  <SelectOption
                    key={styleSolution.value}
                    label={styleSolution.label}
                    value={styleSolution.value}
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
