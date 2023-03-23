import {
  Portal,
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from "@ark-ui/react";
import { FiChevronDown } from "react-icons/fi";

import "./styles.css";

export default function Page() {
  return (
    <Select positioning={{ gutter: 4 }}>
      {({ selectedOption, isOpen }) => (
        <>
          <SelectTrigger>
            <button>
              <span>{selectedOption?.label ?? "Select option"}</span>
              <SelectIcon isOpen={isOpen} />
            </button>
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                <SelectOption value="react" label="React" />
                <SelectOption value="solid" label="Solid">
                  Solid
                </SelectOption>
                <SelectOption value="vue" label="Vue">
                  Vue
                </SelectOption>
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </>
      )}
    </Select>
  );
}

const SelectIcon = (props) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return <FiChevronDown style={iconStyles} />;
};
