import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CateGoryItem from "./categoryItem/CateGoryItem";
import { useRouter } from "next/router";
// import { number } from "yup";

SideBarCategory.propTypes = {
  category: PropTypes.array,
  handleClickCategoryList: PropTypes.func,
  idPostByCategoryDetail: PropTypes.string,
};

SideBarCategory.defaultProps = {
  category: [],
  handleClickCategoryList: null,
  idPostByCategoryDetail: "",
};

function SideBarCategory({
  category,
  handleClickCategoryList,
  idPostByCategoryDetail,
}) {
  const router = useRouter();
  const idRouter = router.query.id;
  const [idCategory, setIdCategory] = useState("62f0ce39d497346d598d8b92");

  useEffect(() => {
    if (idRouter) {
      setIdCategory(idRouter);
    } else if (idPostByCategoryDetail) {
      setIdCategory(idPostByCategoryDetail);
    }
  }, [idRouter, idPostByCategoryDetail]);

  return (
    <>
      <h2 className="title">Danh mục</h2>
      <div className="category">
        {category?.map((item) => {
          return (
            <CateGoryItem
              key={item._id}
              title={item.name}
              handleClickCategoryList={(id, title) => {
                handleClickCategoryList(id, title);
                setIdCategory(id);
              }}
              id={item._id}
              isActive={idCategory === item._id}
            />
          );
        })}
      </div>
    </>
  );
}

export default SideBarCategory;
