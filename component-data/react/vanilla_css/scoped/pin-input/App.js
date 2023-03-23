import { PinInput, PinInputControl, PinInputField } from "@ark-ui/react";

import "./styles.css";

export default function Page() {
  return (
    <PinInput placeholder="0" onComplete={(e) => alert(e.valueAsString)}>
      <PinInputControl>
        {[0, 1, 2, 3].map((id, index) => (
          <PinInputField key={id} index={index} />
        ))}
      </PinInputControl>
    </PinInput>
  );
}
