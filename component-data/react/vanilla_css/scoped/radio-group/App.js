import {
  Radio,
  RadioControl,
  RadioGroup,
  RadioInput,
  RadioLabel,
} from "@ark-ui/react";

import "./styles.css";

const options = [
  { id: "react", label: "React" },
  { id: "solid", label: "Solid" },
  { id: "vue", label: "Vue" },
];

export default function Page() {
  return (
    <RadioGroup defaultValue="react">
      {options.map((option, id) => (
        <Radio key={id} value={option.id}>
          <RadioInput data-peer />
          <RadioControl />
          <RadioLabel>{option.label}</RadioLabel>
        </Radio>
      ))}
    </RadioGroup>
  );
}
