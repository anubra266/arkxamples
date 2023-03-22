import {
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
  Portal,
} from "@ark-ui/react";
import { FiMapPin } from "react-icons/fi";

import "./styles.css";

export default function Page() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <a
          href="https://github.com/segunadebayo"
          target="_blank"
          rel="noreferrer"
        >
          <div className="avatar avatar_size__lg">
            <img
              alt="Segun Adebayo"
              src="https://avatars2.githubusercontent.com/u/6916170"
            />
          </div>
        </a>
      </HoverCardTrigger>
      <Portal>
        <HoverCardPositioner>
          <HoverCardContent>
            <HoverCardArrow>
              <HoverCardArrowTip />
            </HoverCardArrow>
            <div className="stack content">
              <div className="stack row header">
                <div className="avatar avatar_size__sm">
                  <img
                    alt="Segun Adebayo"
                    src="https://avatars2.githubusercontent.com/u/6916170"
                  />
                </div>

                <button
                  className="button button_secondary button_size__xs text_xs"
                  onClick={() => alert("Follow")}
                >
                  Follow
                </button>
              </div>
              <div className="stack body">
                <div className="stack">
                  <div className="stack row">
                    <span className="text_sm text_semibold">segunadebayo</span>
                    <span className="text_sm fg_muted">Segun Adebayo</span>
                  </div>
                  <p className="text_sm">
                    Building @chakra-ui ⚡️. Design Systems and UI Engineer
                  </p>
                </div>
                <div className="stack row fg_subtle align_center">
                  <FiMapPin className="map_icon" />
                  <p className="text_xs">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </Portal>
    </HoverCard>
  );
}
