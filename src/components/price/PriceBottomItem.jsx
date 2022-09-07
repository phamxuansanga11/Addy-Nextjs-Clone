import React from "react";

function PriceBottomItem({ item }) {
  return (
    <div className="bottom__item">
      <div className="bottom__item-wrapper">
        <i>
          <img src="../../../img/icon-success.png" alt="" />
        </i>
        <p>{item}</p>
      </div>
    </div>
  );
}

export default PriceBottomItem;
