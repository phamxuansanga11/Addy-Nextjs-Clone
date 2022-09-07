import React from "react";
import PriceItem from "./PriceItem";

function Price(props) {
  const arr5G = ["Dung lượng 5GB", "Dung lượng 6GB", "Dung lượng 7GB"];
  const arr10G = ["Dung lượng 10GB", "Dung lượng 11GB", "Dung lượng 12GB"];
  const arr20G = ["Dung lượng 20GB", "Dung lượng 21GB", "Dung lượng 22GB"];
  return (
    <section className="price">
      <div className="container --container__price">
        <h2>Bảng giá</h2>
        <div className="price__content">
          <PriceItem title="Miễn phí" price="0đ/Tháng" arrData={arr5G} />
          <PriceItem title="Cơ bản" price="199.000đ/Tháng" arrData={arr10G} />
          <PriceItem title="Nâng cao" price="999.000đ/Tháng" arrData={arr20G} />
        </div>
      </div>
    </section>
  );
}

export default Price;
