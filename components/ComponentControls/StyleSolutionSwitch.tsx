import { select } from "../../design-system/recipes";
import {
  Portal,
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from "@ark-ui/react";

import {
  STYLE_SOLUTIONS,
  useComponentConfig,
  StyleSolution,
} from "../../utils/useComponentConfig";
import { SelectIcon } from "../SelectIcon";
import { css, cx } from "../../design-system/css";

export function StyleSolutionSwitch() {
  const { styleSolution, setComponentConfig } = useComponentConfig();

  return (
    <Select
      positioning={{ gutter: 4 }}
      defaultValue={STYLE_SOLUTIONS[styleSolution]}
      onChange={(opt) => {
        setComponentConfig("styleSolution", opt?.value as StyleSolution);
      }}
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
          <Portal>
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
          </Portal>
        </>
      )}
    </Select>
  );
}
