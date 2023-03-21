import { useLocalStorage } from "usehooks-ts";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import {
  FRAMEWORKS,
  STYLE_SOLUTIONS,
  defaultConfig,
} from "utils/component-config/constants";
import { ComponentConfig, ConfigSetterArg, ConfigValue } from "utils/types";
import { setComponentConfig } from "utils/component-config";

export const configLocalStorageKey = "arkxamples-component-config";

const validateParams = (
  params: ReadonlyURLSearchParams,
  key: string,
  value: string,
  acc: ComponentConfig
) => {
  switch (key) {
    case "framework":
      if (
        Object.keys(FRAMEWORKS).some(
          (f) => f.toLocaleLowerCase() === params.get(key)?.toLocaleLowerCase()
        )
      ) {
        return params.get(key);
      }
      return value;

    case "styleSolution":
      if (
        Object.keys(STYLE_SOLUTIONS).some(
          (ss) =>
            ss.toLocaleLowerCase() === params.get(key)?.toLocaleLowerCase()
        )
      ) {
        return params.get(key);
      }
      return value;

    case "styleType":
      //* We still need to ensure the styleType exists under the chosen styleSolution
      if (
        STYLE_SOLUTIONS[acc.styleSolution].types
          .map((t) => t.value)
          .some(
            (st) =>
              st.toLocaleLowerCase() === params.get(key)?.toLocaleLowerCase()
          )
      ) {
        return params.get(key);
      }
      return value;

    default:
      return value;
  }
};

export const useComponentConfig = () => {
  const searchParams = useSearchParams();

  const configWithParams = Object.entries(defaultConfig)
    //* Just so styleSolution comes before styleType, as it has to be validated first
    .sort(function (a, b) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    })
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: validateParams(searchParams, key, value, acc),
      }),
      {} as ComponentConfig
    );

  const [config, setConfig] = useLocalStorage(
    configLocalStorageKey,
    configWithParams
  );

  const queryString = searchParams.toString();

  useEffect(() => {
    setConfig(configWithParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString]);

  const configSetter = (newConfigOrConfigFn: ConfigSetterArg) =>
    setConfig(
      typeof newConfigOrConfigFn === "function"
        ? newConfigOrConfigFn(config)
        : newConfigOrConfigFn
    );

  return {
    ...config,
    setComponentConfig: <K extends keyof ComponentConfig>(
      key: K,
      value: ConfigValue<K>
    ) => setComponentConfig(key, value, configSetter),
  };
};

export const useQueryString = (tempConfig: ComponentConfig) => {
  const compConfig = useComponentConfig();
  const searchParams = new URLSearchParams();

  Object.entries(tempConfig).forEach(([key, value]) => {
    if (compConfig[key].toLocaleLowerCase() !== value.toLocaleLowerCase()) {
      searchParams.append(key, value);
    }
  });

  const paramsString = searchParams.toString();

  return !!paramsString ? `?${paramsString}` : "";
};
