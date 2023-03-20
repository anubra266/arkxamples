import { FiChevronDown } from "react-icons/fi";

export const SelectIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return <FiChevronDown style={iconStyles} />;
};
