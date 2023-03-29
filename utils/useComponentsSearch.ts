import { useState } from "react";

import { components } from "utils/component-setup/constants";

export const useComponentsSearch = () => {
  const [query, setQuery] = useState("");

  const filteredComponents = components.filter((comp) =>
    comp.label.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  // const filteredComponents =
  //   resultComponents.length > 0 ? resultComponents : components;

  const emptyResult = !!query && filteredComponents.length < 1;

  return { query, setQuery, filteredComponents, emptyResult };
};
