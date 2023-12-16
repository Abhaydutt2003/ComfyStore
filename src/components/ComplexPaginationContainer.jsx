import { useLoaderData, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const navigate = useNavigate();
  //using vanilla js (can use react query)
  const search = window.location.search;
  const pathname = window.location.pathname;

  const handlePageChange = (currentPage, action) => {
    let newPage;
    if (action == "backward") {
      newPage = currentPage - 1 < 1 ? pageCount : currentPage - 1;
    } else if (action == "forward") {
      newPage = currentPage + 1 < pageCount ? currentPage+1 : 1;
      console.log(newPage);
    } else {
      newPage = currentPage;
    }
    const seacrhParams = new URLSearchParams(search);
    seacrhParams.set("page", newPage);
    navigate(`${pathname}?${seacrhParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber, "exact")}
        className={`btn btn-xs sm:btn-md join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    //first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page == 1 }));
    //dots
    if (page > 2) {
      pageButtons.push(
        <button className=" join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }
    if (page != 1 && page != pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    //dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }
    //last button
    pageButtons.push(addPageButton({ pageNumber: pageCount, activeClass: page == pageCount }));
    console.log(pageButtons);
    return pageButtons;
  };
  if (pageCount < 2) {
    return null;
  }
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            handlePageChange(page, "backward");
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            handlePageChange(page, "forward");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;
