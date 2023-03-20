import "./styles.css";

import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/react";

export default function Page() {
  return (
    <Checkbox>
      <CheckboxLabel>Checkbox</CheckboxLabel>
      <CheckboxInput />
      <CheckboxControl />
    </Checkbox>
  );
}
