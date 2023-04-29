export default function SelectIcon(props) {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      style={iconStyles}
    >
      <path
        fill="none"
        stroke="#888888"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m17 10l-5 5l-5-5"
      ></path>
    </svg>
  );
}
