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
  FRAMEWORKS,
  useComponentConfig,
  Framework,
} from "../../utils/useComponentConfig";
import { SelectIcon } from "../SelectIcon";
import { css, cx } from "../../design-system/css";

export function FrameworkSwitch() {
  const { framework, setComponentConfig } = useComponentConfig();

  return (
    <Select
      positioning={{ gutter: 4 }}
      defaultValue={FRAMEWORKS[framework]}
      onChange={(opt) => {
        setComponentConfig("framework", opt?.value as Framework);
      }}
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
          <Portal>
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
          </Portal>
        </>
      )}
    </Select>
  );
}
