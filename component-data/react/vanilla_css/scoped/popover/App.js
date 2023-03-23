import {
  Popover,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "@ark-ui/react";

import "./styles.css";

export default function Page() {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="button button_secondary button_size__md">
          Open
        </button>
      </PopoverTrigger>
      <PopoverPositioner>
        <PopoverArrow>
          <PopoverArrowTip />
        </PopoverArrow>
        <PopoverContent>
          <div className="stack content">
            <div className="stack">
              <PopoverTitle>Favorite Cake</PopoverTitle>
              <PopoverDescription>
                Dessert jelly beans pudding chocolate pie pastry danish
                chocolate pie.
              </PopoverDescription>
            </div>
            <input className="input" />
            <div className="stack row actions">
              <PopoverCloseTrigger>
                <button className="button button_link button_size__sm">
                  Dismiss
                </button>
              </PopoverCloseTrigger>
              <button className="button button_link button_size__sm active">
                Show
              </button>
            </div>
          </div>
        </PopoverContent>
      </PopoverPositioner>
    </Popover>
  );
}
