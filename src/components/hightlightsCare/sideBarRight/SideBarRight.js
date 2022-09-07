import React from "react";
import PropTypes from "prop-types";
import PostCareItem from "../postCareItem/PostCareItem";
import SideBarCategory from "./sideBarCategory/SideBarCategory";

SideBarRight.propTypes = {
  category: PropTypes.array,
  handleClickCategoryList: PropTypes.func,
  idPostByCategoryDetail: PropTypes.string,
  postByView: PropTypes.array,
};

SideBarRight.defaultProps = {
  category: [],
  handleClickCategoryList: null,
  idPostByCategoryDetail: "",
  postByView: [],
};

function SideBarRight({
  category,
  handleClickCategoryList,
  idPostByCategoryDetail,
  postByView,
}) {
  return (
    <>
      <div className="wrapper__grid-right">
        <SideBarCategory
          category={category}
          handleClickCategoryList={handleClickCategoryList}
          idPostByCategoryDetail={idPostByCategoryDetail}
        />
        <h2 className="title">Bạn có thể quan tâm</h2>
        <PostCareItem data={postByView} />
      </div>
    </>
  );
}

export default SideBarRight;
