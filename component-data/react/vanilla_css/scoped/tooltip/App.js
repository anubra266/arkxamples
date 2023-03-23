import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@ark-ui/react";

import "./styles.css";

export default function Page() {
  return (
    <Tooltip openDelay={0} closeDelay={200} positioning={{ placement: "top" }}>
      <TooltipTrigger>
        <span>Hover me</span>
      </TooltipTrigger>
      <TooltipPositioner>
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
        <TooltipContent>My Tooltip</TooltipContent>
      </TooltipPositioner>
    </Tooltip>
  );
}
