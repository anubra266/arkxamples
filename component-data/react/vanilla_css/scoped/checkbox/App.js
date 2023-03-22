import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/react";
import React from "react";

import "./styles.css";

export default function Page() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const someChecked = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={someChecked}
        onChange={(e) =>
          setCheckedItems([e.checked === true, e.checked === true])
        }
      >
        {(state) => (
          <>
            <CheckboxInput />
            <CheckboxControl>
              {state.isChecked && <CheckIcon />}
              {state.isIndeterminate && <MinusIcon />}
            </CheckboxControl>
            <CheckboxLabel>Parent Checkbox</CheckboxLabel>
          </>
        )}
      </Checkbox>
      <div>
        <Checkbox
          checked={checkedItems[0]}
          onChange={(e) =>
            setCheckedItems([e.checked === true, checkedItems[1]])
          }
        >
          {(state) => (
            <>
              <CheckboxInput />
              <CheckboxControl>
                {state.isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel>Child Checkbox 1</CheckboxLabel>
            </>
          )}
        </Checkbox>
        <Checkbox
          checked={checkedItems[1]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.checked === true])
          }
        >
          {(state) => (
            <>
              <CheckboxInput />
              <CheckboxControl>
                {state.isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel>Child Checkbox 2</CheckboxLabel>
            </>
          )}
        </Checkbox>
      </div>
    </>
  );
}

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
