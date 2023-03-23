import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/solid";

import "./styles.css";

export default function Page() {
  return (
    <Checkbox>
      <CheckboxInput />
      <CheckboxControl />
      <CheckboxLabel>Checkbox</CheckboxLabel>
    </Checkbox>
  );
}
