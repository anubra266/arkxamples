import { FiChevronDown } from "solid-icons/fi";

const AccordionIcon = (props) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return <FiChevronDown style={iconStyles} />;
};

export default AccordionIcon;
