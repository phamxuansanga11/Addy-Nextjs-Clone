import React from "react";
import PriceBottomItem from "./PriceBottomItem";

function PriceItem({ title, price, arrData }) {
  return (
    <div className="price__content-item">
      <div className="top">
        <div className="top__title">
          <p>{title}</p>
        </div>
        <p className="decription">Enter your description</p>
        <div className="top__price">
          <p>{price}</p>
        </div>
      </div>
      <div className="bottom">
        {arrData.map((item) => (
          <PriceBottomItem item={item} />
        ))}
      </div>
      <div className="btn__get-started">
        <button>Get started</button>
      </div>
    </div>
  );
}

export default PriceItem;
