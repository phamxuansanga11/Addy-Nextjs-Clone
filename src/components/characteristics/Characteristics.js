import React from "react";
import PropTypes from "prop-types";

Characteristics.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Characteristics(props) {
  return (
    <section className="section__characteristics">
      <div className="container">
        <div className="characteristics">
          <h2>Điểm khác biệt của Addy</h2>
          <div className="characteristics__flex">
            <div className="characteristics__flex-left characteristics__flex-glb">
              <div className="characteristics__item">
                <div className="title">
                  <h5>Miễn Phí</h5>
                  <i style={{ marginLeft: "10px" }}>
                    <img src="../../../img/ic-point-1.png" alt="" />
                  </i>
                </div>
                <p className="text__content">
                  Giải pháp miễn phí cho doanh nghiệp và cá nhân
                </p>
              </div>
              <div className="characteristics__item">
                <div className="title">
                  <h5>Dễ Sử Dụng</h5>
                  <i style={{ marginLeft: "10px" }}>
                    <img src="../../../img/ic-point-2.png" alt="" />
                  </i>
                </div>
                <p className="text__content">
                  Dễ dàng áp dụng trong quản trị khách hàng
                </p>
              </div>
            </div>
            <div className="characteristics__flex-mid">
              <img src="../../../img/difference-addy.png" alt="" />
            </div>
            <div className="characteristics__flex-right characteristics__flex-glb">
              <div className="characteristics__item">
                <div className="title">
                  <i>
                    <img src="../../../img/ic-point-3.png" alt="" />
                  </i>
                  <h5>Đa Nền Tảng</h5>
                </div>
                <p className="text__content">
                  Lắng nghe khách hàng trên nhiều nền tảng
                </p>
              </div>
              <div className="characteristics__item">
                <div className="title">
                  <i>
                    <img src="../../../img/ic-point-4.png" alt="" />
                  </i>
                  <h5>Zalo OAs</h5>
                </div>
                <p className="text__content">
                  Nền tảng quản trị ZALO OAs tốt nhất
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Characteristics;
