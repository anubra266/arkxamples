import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@ark-ui/react";
import { FiX } from "react-icons/fi";

import "./styles.css";

export default function Page() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="action primary">Open dialog</button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogContainer>
          <DialogContent>
            <div className="stack content">
              <div className="stack header">
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>Dialog Description</DialogDescription>
              </div>
              <div className="stack actions">
                <DialogCloseTrigger>
                  <button className="action cancel secondary">Cancel</button>
                </DialogCloseTrigger>
                <button className="action confirm primary">Confirm</button>
              </div>
            </div>
            <DialogCloseTrigger>
              <button
                variant="tertiary"
                aria-label="Close dialog"
                className="action close_button"
              >
                <FiX />
              </button>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
}
