import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import * as ga from "../../../libs/ga";

Search.propTypes = {
  handleOnSubmit: PropTypes.func,
};

Search.defaultProps = {
  handleOnSubmit: null,
};

function Search({ handleOnSubmit }) {
  const [valueSearch, setValueSearch] = useState("");

  const setTimeOutRef = useRef(null);

  // const [query, setQuery] = useState("");

  const handleSubmit = (newValueInput) => {
    // console.log("valueInput:", newValueInputr);
    handleOnSubmit(newValueInput);
  };

  const handleOnChange = (e) => {
    let valueInput = e.target.value;

    setValueSearch(valueInput);

    if (setTimeOutRef.current) {
      clearTimeout(setTimeOutRef.current);
    }

    setTimeOutRef.current = setTimeout(() => {
      const formValue = {
        valueSearch: valueInput,
      };
      handleSubmit(formValue);
    }, 500);
  };

  const search = () => {
    ga.event({
      action: "search",
      params: {
        search_term: valueSearch,
      },
    });
  };

  return (
    <section className="section__search">
      <div className="container">
        <div className="search__content">
          <h2 className="title">
            Xin chào, Addy CMS có thể giúp gì được cho bạn?
          </h2>
          <div className="search__content-input">
            <div className="icon__search">
              <i>
                <img src="../../../img/ic-search.svg" alt="icon search" />
              </i>
            </div>
            <input
              type="text"
              placeholder="Nhập để tìm kiếm bài viết..."
              value={valueSearch}
              onChange={handleOnChange}
              onSubmit={() => search()}
            />
            {/* <div className="close__input">x</div> */}
          </div>
          <p className="search__contact">
            Liên hệ với Addy CMS để được hỗ trợ miễn phí{" "}
            <a href="#">1900 1111</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Search;
