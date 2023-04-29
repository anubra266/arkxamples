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

import CloseIcon from "./CloseIcon";
import "./styles.css";

export default function Page() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="button button_primary button_size__md">
          Open dialog
        </button>
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
                  <button className="button button_secondary button_size__md w_full">
                    Cancel
                  </button>
                </DialogCloseTrigger>
                <button className="button button_primary button_size__md w_full">
                  Confirm
                </button>
              </div>
            </div>
            <DialogCloseTrigger>
              <button
                aria-label="Close dialog"
                className="button button_tertiary button_size__md close_button"
              >
                <CloseIcon />
              </button>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
}
