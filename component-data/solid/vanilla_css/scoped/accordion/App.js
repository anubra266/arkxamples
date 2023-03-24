import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ark-ui/solid";
import { For } from "solid-js";

import "./styles.css";

const items = ["React", "Solid", "Vue"];

export default function Page() {
  return (
    <Accordion value="React">
      <For each={items}>
        {(item) => (
          <AccordionItem value={item}>
            {(state) => (
              <>
                <AccordionTrigger>
                  <button>
                    <span>What is {item}?</span>
                    {/* TODO Render prop isn't implemented for Solid in Ark at this time */}
                    {/* <AccordionIcon isOpen={state().isOpen} /> */}
                  </button>
                </AccordionTrigger>
                <AccordionContent>
                  Pudding donut gummies chupa chups oat cake marzipan biscuit
                  tart. Dessert macaroon ice cream bonbon jelly. Jelly topping
                  tiramisu halvah lollipop.
                </AccordionContent>
              </>
            )}
          </AccordionItem>
        )}
      </For>
    </Accordion>
  );
}
