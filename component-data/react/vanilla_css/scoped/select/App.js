import {
  Portal,
  Select,
  SelectContent,
  SelectOption,
  SelectOptionGroup,
  SelectOptionGroupLabel,
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
                <SelectOption value="solid" label="Solid" />
                <SelectOption value="vue" label="Vue" />

                <SelectOptionGroup>
                  <SelectOptionGroupLabel>Styling</SelectOptionGroupLabel>
                  <SelectOption value="css" label="CSS" />
                  <SelectOption value="css-panda" label="CSS Panda" />
                  <SelectOption value="tailwind" label="Tailwind" />
                </SelectOptionGroup>
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
