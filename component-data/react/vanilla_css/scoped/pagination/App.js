import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
} from "@ark-ui/react";

import "./styles.css";

export default function Page() {
  return (
    <Pagination count={5000} pageSize={10} siblingCount={2}>
      {({ pages }) => (
        <>
          <PaginationList>
            <PaginationPrevPageTrigger>
              <button className="button button_secondary button_size__md">
                Previous
              </button>
            </PaginationPrevPageTrigger>

            {pages.map((page, index) =>
              page.type === "page" ? (
                <PaginationPageTrigger key={index} value={page.value}>
                  <button className="button button_tertiary button_size__md">
                    {page.value}
                  </button>
                </PaginationPageTrigger>
              ) : (
                <PaginationEllipsis key={index} index={index}>
                  &#8230;
                </PaginationEllipsis>
              )
            )}

            <PaginationNextPageTrigger>
              <button className="button button_secondary button_size__md">
                Next
              </button>
            </PaginationNextPageTrigger>
          </PaginationList>
        </>
      )}
    </Pagination>
  );
}
