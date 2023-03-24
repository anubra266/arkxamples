import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/solid";
import { createSignal } from "solid-js";

import CheckIcon from "./CheckIcon";
import MinusIcon from "./MinusIcon";
import "./styles.css";

export default function Page() {
  const [checkedItems, setCheckedItems] = createSignal([false, false]);

  const allChecked = () => checkedItems().every(Boolean);
  const isIndeterminate = () => checkedItems().some(Boolean) && !allChecked();

  return (
    <>
      <Checkbox
        checked={allChecked()}
        indeterminate={isIndeterminate()}
        onChange={(e) => setCheckedItems([e.checked, e.checked])}
      >
        {(state) => (
          <>
            <CheckboxInput />
            <CheckboxControl>
              {state().isChecked && <CheckIcon />}
              {state().isIndeterminate && <MinusIcon />}
            </CheckboxControl>
            <CheckboxLabel>Checkbox</CheckboxLabel>
          </>
        )}
      </Checkbox>
      <div>
        <Checkbox
          checked={checkedItems()[0]}
          onChange={(e) => setCheckedItems([e.checked, checkedItems()[1]])}
        >
          {(state) => (
            <>
              <CheckboxInput />
              <CheckboxControl>
                {state().isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel>Checkbox</CheckboxLabel>
            </>
          )}
        </Checkbox>
        <Checkbox
          checked={checkedItems()[1]}
          onChange={(e) => setCheckedItems([checkedItems()[0], e.checked])}
        >
          {(state) => (
            <>
              <CheckboxInput />
              <CheckboxControl>
                {state().isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel>Checkbox</CheckboxLabel>
            </>
          )}
        </Checkbox>
      </div>
    </>
  );
}
