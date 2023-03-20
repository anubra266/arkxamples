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
  StyleType,
} from "../../utils/useComponentConfig";
import { SelectIcon } from "../SelectIcon";
import { css, cx } from "../../design-system/css";

export function StyleTypeSwitch() {
  const { styleType, styleSolution, setComponentConfig } = useComponentConfig();

  const styleTypeOption = STYLE_SOLUTIONS[styleSolution].types.find(
    (opt) => opt.value === styleType
  );
  return (
    <Select
      positioning={{ gutter: 4 }}
      selectedOption={styleTypeOption}
      onChange={(opt) => {
        setComponentConfig("styleType", opt?.value as StyleType);
      }}
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
          <Portal>
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
          </Portal>
        </>
      )}
    </Select>
  );
}
