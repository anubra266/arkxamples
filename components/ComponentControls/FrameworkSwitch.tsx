import { select } from "design-system/recipes";
import {
  Portal,
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from "@ark-ui/react";

import { useComponentConfig } from "utils/useComponentConfig";
import { SelectIcon } from "../SelectIcon";
import { css, cx } from "../../design-system/css";
import { ComponentControl } from "components/ComponentControls";
import { Fragment } from "react";
import { FRAMEWORKS } from "utils/component-config/constants";

export function FrameworkSwitch(props: ComponentControl) {
  const Wrapper = props.norPortal ? Fragment : Portal;

  const { framework } = useComponentConfig();

  return (
    <Select
      positioning={{ gutter: 4 }}
      defaultValue={FRAMEWORKS[framework]}
      onChange={props.onChange}
    >
      {({ selectedOption, isOpen }) => (
        <>
          <SelectTrigger>
            <button
              className={cx(select({ size: "xs" }), css({ gap: "1" }))}
              title="Switch Framework"
            >
              <span>{selectedOption?.label}</span>
              <SelectIcon isOpen={isOpen} />
            </button>
          </SelectTrigger>
          <Wrapper>
            <SelectPositioner className={select({ size: "xs" })}>
              <SelectContent>
                {Object.values(FRAMEWORKS).map((framework) => (
                  <SelectOption
                    key={framework.value}
                    label={framework.label}
                    value={framework.value}
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
