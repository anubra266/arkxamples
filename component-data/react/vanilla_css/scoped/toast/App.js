import {
  Portal,
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider,
  ToastTitle,
  useToast,
} from "@ark-ui/react";

import CloseIcon from "./CloseIcon";
import "./styles.css";

export default function Page() {
  return (
    <ToastProvider>
      <Portal>
        <ToastPlacements>
          {(placements) =>
            placements.map((placement) => (
              <ToastGroup key={placement} placement={placement}>
                {(toasts) =>
                  toasts.map((toast) => (
                    <Toast key={toast.id} toast={toast}>
                      <div className="stack gap_16">
                        <div className="stack">
                          <ToastTitle />
                          <ToastDescription />
                        </div>
                        <div className="stack row gap_12">
                          <ToastCloseTrigger>
                            <button className="button button_link button_size__sm">
                              Dismiss
                            </button>
                          </ToastCloseTrigger>
                          <button className="button button_link button_size__sm active">
                            Show
                          </button>
                        </div>
                      </div>
                      <ToastCloseTrigger>
                        <button
                          aria-label="Close toast"
                          className="button button_tertiary button_size__sm close_button"
                        >
                          <CloseIcon />
                        </button>
                      </ToastCloseTrigger>
                    </Toast>
                  ))
                }
              </ToastGroup>
            ))
          }
        </ToastPlacements>
      </Portal>
      <ToastTrigger />
    </ToastProvider>
  );
}

const ToastTrigger = () => {
  const toast = useToast();

  return (
    <button
      className="button button_primary button_size__md"
      onClick={() => {
        toast.create({
          title: "Hello",
          description: "I'm a toast",
          placement: "bottom-end",
          removeDelay: 0,
        });
      }}
    >
      Add toast
    </button>
  );
};
