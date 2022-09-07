import React from "react";
import PropTypes from "prop-types";

VisionAndMission.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function VisionAndMission(props) {
  return (
    <section className="vision-and-mission">
      <div className="container">
        <h2 className="title">Tầm nhìn & Sứ mệnh</h2>
        <div className="vision-and-mission__grid">
          <div className="grid__item">
            <img src="../../../img/tamnhin-02_1.png" alt="" />
            <h4>Tầm nhìn</h4>
            <p>
              Doanh nghiệp tiên phong đào tạo và cung cấp giải pháp quản trị
              khách hàng miễn phí cho các doanh nghiệp nhỏ và vừa
            </p>
          </div>
          <div className="grid__item">
            <img src="../../../img/sumenh-02_1.png" alt="" />
            <h4>Sứ mệnh</h4>
            <p>
              Các doanh nghiệp nhỏ và vừa tận dụng crm trong việc quản trị khách
              hàng
            </p>
          </div>
          <div className="grid__item">
            <img src="../../../img/giatricoloi-02_1.png" alt="" />
            <h4>Giá trị cốt lõi</h4>
            <p>Miễn phí - Đơn giản - Nhanh chóng - Dễ dùng - Thông minh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionAndMission;
