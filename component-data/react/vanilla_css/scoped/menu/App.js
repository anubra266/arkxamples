import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  Portal,
} from "@ark-ui/react";

import RightIcon from "./RightIcon";
import "./styles.css";

export default function Page() {
  return (
    <Menu closeOnSelect={false}>
      <MenuTrigger>
        <button className="button button_primary button_size__md">
          Open menu
        </button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            <MenuItem id="new-tab">New Tab...</MenuItem>
            <MenuItem id="new-win">New Window...</MenuItem>
            <MenuItemGroup id="js-frameworks">
              <MenuItemGroupLabel htmlFor="js-frameworks">
                JS Frameworks
              </MenuItemGroupLabel>
              <MenuItem id="react">React</MenuItem>
              <MenuItem id="vue">Vue</MenuItem>
              <MenuItem id="solid">Solid</MenuItem>
            </MenuItemGroup>

            <MenuItemGroup id="css-frameworks">
              <MenuItemGroupLabel htmlFor="css-frameworks">
                CSS Frameworks
              </MenuItemGroupLabel>
              <MenuItem id="tailwind">Tailwind</MenuItem>
              <MenuItem id="css-panda">CSS Panda</MenuItem>
              <MenuItem id="bootstrap">Bootstrap</MenuItem>
            </MenuItemGroup>

            <MenuSeparator />
            <Menu
              closeOnSelect={false}
              positioning={{ placement: "right-start" }}
            >
              <MenuTriggerItem>
                <span className="flex_1">More options</span>
                <RightIcon />
              </MenuTriggerItem>
              <Portal>
                <MenuPositioner>
                  <MenuContent>
                    <MenuItem id="twitter">Twitter</MenuItem>
                    <MenuItem id="message">Message</MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </Portal>
            </Menu>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  );
}
