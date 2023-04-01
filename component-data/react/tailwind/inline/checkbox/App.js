import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/react";
import React from "react";

import CheckIcon from "./CheckIcon";
import MinusIcon from "./MinusIcon";

export default function Page() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const someChecked = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        className="rootStyles"
        checked={allChecked}
        indeterminate={someChecked}
        onChange={(e) =>
          setCheckedItems([e.checked === true, e.checked === true])
        }
      >
        {(state) => (
          <>
            <CheckboxInput className="inputStyles" />
            <CheckboxControl className="controlStyles">
              {state.isChecked && <CheckIcon />}
              {state.isIndeterminate && <MinusIcon />}
            </CheckboxControl>
            <CheckboxLabel className="labelStyles">
              Parent Checkbox
            </CheckboxLabel>
          </>
        )}
      </Checkbox>
      <div>
        <Checkbox
          className="rootStyles"
          checked={checkedItems[0]}
          onChange={(e) =>
            setCheckedItems([e.checked === true, checkedItems[1]])
          }
        >
          {(state) => (
            <>
              <CheckboxInput className="inputStyles" />
              <CheckboxControl className="controlStyles">
                {state.isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel className="labelStyles">
                Child Checkbox 1
              </CheckboxLabel>
            </>
          )}
        </Checkbox>
        <Checkbox
          className="rootStyles"
          checked={checkedItems[1]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.checked === true])
          }
        >
          {(state) => (
            <>
              <CheckboxInput className="inputStyles" />
              <CheckboxControl className="controlStyles">
                {state.isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel className="labelStyles">
                Child Checkbox 2
              </CheckboxLabel>
            </>
          )}
        </Checkbox>
      </div>
    </>
  );
}
