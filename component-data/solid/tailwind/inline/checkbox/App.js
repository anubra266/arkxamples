import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/solid";
import { createSignal } from "solid-js";

import CheckIcon from "./CheckIcon";
import MinusIcon from "./MinusIcon";

export default function Page() {
  const [checkedItems, setCheckedItems] = createSignal([false, false]);

  const allChecked = () => checkedItems().every(Boolean);
  const isIndeterminate = () => checkedItems().some(Boolean) && !allChecked();

  return (
    <>
      <Checkbox
        class="rootStyles"
        checked={allChecked()}
        indeterminate={isIndeterminate()}
        onChange={(e) => setCheckedItems([e.checked, e.checked])}
      >
        {(state) => (
          <>
            <CheckboxInput class="inputStyles" />
            <CheckboxControl class="controlStyles">
              {state().isChecked && <CheckIcon />}
              {state().isIndeterminate && <MinusIcon />}
            </CheckboxControl>
            <CheckboxLabel class="labelStyles">Parent Checkbox</CheckboxLabel>
          </>
        )}
      </Checkbox>
      <div>
        <Checkbox
          class="rootStyles"
          checked={checkedItems()[0]}
          onChange={(e) => setCheckedItems([e.checked, checkedItems()[1]])}
        >
          {(state) => (
            <>
              <CheckboxInput class="inputStyles" />
              <CheckboxControl class="controlStyles">
                {state().isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel class="labelStyles">
                Child Checkbox 1
              </CheckboxLabel>
            </>
          )}
        </Checkbox>
        <Checkbox
          class="rootStyles"
          checked={checkedItems()[1]}
          onChange={(e) => setCheckedItems([checkedItems()[0], e.checked])}
        >
          {(state) => (
            <>
              <CheckboxInput class="inputStyles" />
              <CheckboxControl class="controlStyles">
                {state().isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel class="labelStyles">
                Child Checkbox 2
              </CheckboxLabel>
            </>
          )}
        </Checkbox>
      </div>
    </>
  );
}
