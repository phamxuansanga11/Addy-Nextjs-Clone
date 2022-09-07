import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func,
  active: PropTypes.number,
  handleSetDownCurrentPage: PropTypes.func,
  handleSetUpCurrentPage: PropTypes.func,
};

Pagination.defaultProps = {
  postsPerPage: null,
  totalPosts: null,
  paginate: null,
  active: null,
  handleSetDownCurrentPage: null,
  handleSetUpCurrentPage: null,
};

function Pagination({
  totalPages,
  paginate,
  paginatePageSearch,
  active,
  handleSetDownCurrentPage,
  handleSetUpCurrentPage,
  handleSetDownCurrentPageSearch,
  handleSetUpCurrentPageSearch,
  isSearchText,
}) {
  const paginateI = (i) => {
    paginate(i);
    paginatePageSearch(i);
  };

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleSetDownCurrentPageChildren = () => {
    if (!isSearchText) {
      handleSetDownCurrentPage();
      console.log("bam zo nút giảm nomal");
    } else {
      handleSetDownCurrentPageSearch();
      console.log("bam zo nút giảm Search");
    }
  };

  const handleSetUpCurrentPageChildren = () => {
    if (!isSearchText) {
      handleSetUpCurrentPage();
      console.log("bam zo nút tăng nomal");
    } else {
      handleSetUpCurrentPageSearch();
      console.log("bam zo nút tăng Search");
    }
  };

  return (
    <div className="paginations">
      <ul className="pagination__list">
        <li
          className={classNames({
            "--btn__controll --prev__btn": true,
            disables: active === 1,
          })}
          onClick={() => handleSetDownCurrentPageChildren()}
        >
          <span>←</span>
        </li>
        {pageNumbers.map(
          (i, index) =>
            index > active - 3 &&
            index < active + 2 && (
              <button
                key={i}
                disabled={index < active + 1 ? false : true}
                className={classNames({
                  "pagination__list-option": true,
                  active: i === active,
                  unhover: index < active + 1 ? false : true,
                })}
                onClick={() => paginateI(i)}
              >
                {i < active + 2 ? i : "..."}
                {/* {i} */}
              </button>
            )
        )}
        <li
          className={classNames({
            "--btn__controll --next__btn": true,
            disables: active === totalPages,
          })}
          onClick={() => handleSetUpCurrentPageChildren()}
        >
          <span>→</span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
