import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

ContentSearchItem.propTypes = {
  data: PropTypes.object,
  momentFunc: PropTypes.func,
};
ContentSearchItem.defaultProps = {
  data: {},
  momentFunc: null,
};

function ContentSearchItem({ data, momentFunc }) {
  return (
    <div className="result__content-grid__item">
      <Link href={`/bai-viet/${data?.slugString}`}>
        <a>
          <img src={`${data?.urlImage}`} alt="" />
          <p className="bg__orange">{data?.description}</p>
        </a>
      </Link>
      <div className="decription">
        <div className="decription__title"></div>
        <div className="decription__time-view">
          <div className="time --flex-icon">
            <i>
              <img src="../../../img/ic-block.svg" alt="" />
            </i>
            <span>{momentFunc(data?.created_at)}</span>
          </div>
          <div className="view --flex-icon">
            <i>
              <img src="../../../img/ic-eye.svg" alt="" />
            </i>
            <span>{`${data?.countViews} lượt xem`}</span>
          </div>
        </div>
        <div className="decription__params">
          <a href="">
            <h3>{data?.title}</h3>
          </a>
          <p className="params">{data?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentSearchItem;
