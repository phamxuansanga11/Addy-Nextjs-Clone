import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

CateGoryItem.propTypes = {
  title: PropTypes.string,
  handleClickCategoryList: PropTypes.func,
};

CateGoryItem.defaultProps = {
  title: "",
  handleClickCategoryList: null,
};

function CateGoryItem({ title, handleClickCategoryList, id, isActive }) {
  const handleClickCategory = () => {
    handleClickCategoryList(id, title);
  };
  return (
    <Link href={`/bai-viet/?id=${id}`} scroll={false}>
      <a
        className={classNames({
          category__detail: true,
          active: isActive,
        })}
        onClick={() => handleClickCategory()}
      >
        {title}
      </a>
    </Link>
  );
}

export default CateGoryItem;
