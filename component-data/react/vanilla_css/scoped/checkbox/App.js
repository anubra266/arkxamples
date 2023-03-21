import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/react";

import "./styles.css";

export default function Page() {
  return (
    <Checkbox>
      <CheckboxLabel>Checkbox</CheckboxLabel>
      <CheckboxInput />
      <CheckboxControl />
    </Checkbox>
  );
}
