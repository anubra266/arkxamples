import { MutableRefObject } from "react";
import { CgHashtag } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";

import { css } from "design-system/css/css";
import { cx } from "design-system/css/cx";
import { Flex, Stack, panda } from "design-system/jsx";
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
  return (
    <>
      <input
        ref={inputRef}
        className={cx(input())}
        placeholder="Search components..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {emptyResult ? (
        <panda.span textAlign="center" fontSize="sm" width="full">
          Can&apos;t find that component. Perharps an <b>invention</b> of yours?
          🧐
        </panda.span>
      ) : null}

      <Stack w="full" gap="3" maxHeight="sm" overflow="auto">
        {filteredComponents.map((comp) => (
          <LinkBox
            key={comp.id}
            onClick={closeDialog}
            display="flex"
            p="4"
            borderRadius="lg"
            w="full"
            cursor="pointer"
            alignItems="center"
            gap="2"
            className={cx(
              "group",
              css({
                color: { base: "#373A35", _dark: "gray.200" },
                bg: { base: "lightGrey", _dark: "gray.800" },
                _hover: {
                  color: { base: "white", _dark: "white" },
                  bg: { base: "purple.800", _dark: "purple.500" },
                },
              })
            )}
            transition="all 0.3s ease"
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
              _groupHover={{
                color: { base: "white", _dark: "white" },
                borderColor: { base: "purple.400" },
              }}
              transition="all 0.3s ease"
            >
              <CgHashtag />
            </Flex>
            <LinkOverlay
              fontSize="lg"
              fontWeight="medium"
              letterSpacing="wide"
              href={`${comp.id}${uriQuery}`}
            >
              {comp.label}
            </LinkOverlay>

            <panda.span
              fontSize="xs"
              ml="auto"
              color={{
                base: "black",
                _dark: "white",
                _groupHover: "white",
              }}
              transition="all 0.3s ease"
            >
              <FaChevronRight />
            </panda.span>
          </LinkBox>
        ))}
      </Stack>
    </>
  );
}
