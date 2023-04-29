import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputField,
  NumberInputIncrementTrigger,
  NumberInputScrubber,
} from "@ark-ui/react";

import ChevronDownIcon from "./ChevronDownIcon";
import ChevronUpIcon from "./ChevronUpIcon";
import "./styles.css";

export default function Page() {
  return (
    <NumberInput min={-50} max={50} defaultValue="42">
      <NumberInputScrubber />
      <NumberInputField />
      <NumberInputControl>
        <NumberInputIncrementTrigger>
          <button>
            <ChevronUpIcon />
          </button>
        </NumberInputIncrementTrigger>
        <NumberInputDecrementTrigger>
          <button>
            <ChevronDownIcon />
          </button>
        </NumberInputDecrementTrigger>
      </NumberInputControl>
    </NumberInput>
  );
}
