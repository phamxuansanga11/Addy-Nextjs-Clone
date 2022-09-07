import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

PostCareItem.propTypes = {
  data: PropTypes.array,
};
PostCareItem.defaultProps = {
  data: [],
};

function PostCareItem({ data }) {
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className="post__care-item">
          <Link href={`/bai-viet-chi-tiet/${item.slugString}`}>
            <a>
              <img src={item.urlImage} alt="" />
              <p>{item?.title}</p>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
}

export default PostCareItem;
