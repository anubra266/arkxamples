import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
} from "@ark-ui/react";

import "./styles.css";

export default function Page() {
  return (
    <Tabs defaultValue="react">
      <TabList>
        <TabTrigger value="react">
          <button>React</button>
        </TabTrigger>
        <TabTrigger value="solid">
          <button>Solid</button>
        </TabTrigger>
        <TabTrigger value="vue">
          <button>Vue</button>
        </TabTrigger>
        <TabIndicator />
      </TabList>
      <TabContent value="react">
        A JavaScript library for building user interfaces
      </TabContent>
      <TabContent value="solid">
        Simple and performant reactivity for building user interfaces.
      </TabContent>
      <TabContent value="vue">
        An approachable, performant and versatile framework for building web
        user interfaces.
      </TabContent>
    </Tabs>
  );
}
