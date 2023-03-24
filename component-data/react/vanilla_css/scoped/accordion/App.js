import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ark-ui/react";

import AccordionIcon from "./AccordionIcon";
import "./styles.css";

const items = ["React", "Solid", "Vue"];

export default function Page() {
  return (
    <Accordion defaultValue="React">
      {items.map((item, id) => (
        <AccordionItem key={id} value={item}>
          {({ isOpen }) => (
            <>
              <AccordionTrigger>
                <button>
                  <span>What is {item}?</span>
                  <AccordionIcon isOpen={isOpen} />
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
      ))}
    </Accordion>
  );
}
