import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxOption,
} from "@ark-ui/react";
import { useRouter } from "next/navigation";
import { MutableRefObject } from "react";
import { CgHashtag } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";

import { css } from "design-system/css/css";
import { cx } from "design-system/css/cx";
import { Flex, panda } from "design-system/jsx";
import { input } from "design-system/recipes";

import { LinkBox, LinkOverlay } from "components/LinkOverlay";

import { useComponentsSearch } from "utils/useComponentsSearch";

type SearchProps = ReturnType<typeof useComponentsSearch> & {
  inputRef: MutableRefObject<HTMLInputElement>;
  uriQuery: string;
  closeDialog: () => void;
};

export function Search(props: SearchProps) {
  const {
    inputRef,
    uriQuery,
    query,
    setQuery,
    filteredComponents,
    emptyResult,
    closeDialog,
  } = props;

  const router = useRouter();

  return (
    <>
      <Combobox
        openOnClick
        inputBehavior="autocomplete"
        inputValue={query}
        onInputChange={({ value }) => {
          setQuery(value);
        }}
        onSelect={({ value }) => {
          router.push(`${value}${uriQuery}`);
          closeDialog();
        }}
        className={css({
          width: "full",
        })}
      >
        {({ isOpen }) => (
          <>
            <ComboboxControl>
              <ComboboxInput
                ref={inputRef}
                className={cx(input())}
                placeholder="Search components..."
              />
            </ComboboxControl>

            {isOpen ? (
              <ComboboxContent
                className={css({
                  listStyle: "none",
                  display: "flex",
                  flexDir: "column",
                  overflow: "auto",
                  maxHeight: "sm",
                  gap: "3",
                  width: "full",
                  padding: 0,
                  mt: "3",
                })}
              >
                {filteredComponents.map((item, index) => (
                  <ComboboxOption
                    key={`${item.id}:${index}`}
                    label={item.label}
                    value={item.id}
                    className={cx(
                      "group",
                      css({
                        width: "full",
                      })
                    )}
                  >
                    <LinkBox
                      onClick={closeDialog}
                      display="flex"
                      p="4"
                      borderRadius="lg"
                      w="full"
                      cursor="pointer"
                      alignItems="center"
                      gap="2"
                      className={css({
                        color: { base: "#373A35", _dark: "gray.200" },
                        bg: { base: "lightGrey", _dark: "gray.800" },
                        _groupSelected: {
                          color: { base: "white", _dark: "white" },
                          bg: { base: "purple.800", _dark: "purple.500" },
                        },
                      })}
                      transition="all 0.03s ease"
                    >
                      <Flex
                        borderRadius="lg"
                        borderWidth="1.5px"
                        p="1.5"
                        shadow={{ base: "xs", _dark: "none" }}
                        borderColor={{
                          base: "rgba(139, 92, 246, 0.07)",
                          _dark: "gray.700",
                        }}
                        _groupSelected={{
                          color: { base: "white", _dark: "white" },
                          borderColor: { base: "purple.400" },
                        }}
                        transition="all 0.03s ease"
                      >
                        <CgHashtag />
                      </Flex>
                      <LinkOverlay
                        fontSize="lg"
                        fontWeight="medium"
                        letterSpacing="wide"
                        href={`${item.id}${uriQuery}`}
                      >
                        {item.label}
                      </LinkOverlay>

                      <panda.span
                        fontSize="xs"
                        ml="auto"
                        color={{
                          base: "black",
                          _dark: "white",
                          _groupSelected: "white",
                        }}
                        transition="all 0.03s ease"
                      >
                        <FaChevronRight />
                      </panda.span>
                    </LinkBox>
                  </ComboboxOption>
                ))}
                {emptyResult ? (
                  <panda.span textAlign="center" fontSize="sm" width="full">
                    Can&apos;t find that component. Perharps an <b>invention</b>{" "}
                    of yours? 🧐
                  </panda.span>
                ) : null}
              </ComboboxContent>
            ) : null}
          </>
        )}
      </Combobox>
    </>
  );
}
