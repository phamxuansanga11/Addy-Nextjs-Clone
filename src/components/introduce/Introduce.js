import React from "react";
import PropTypes from "prop-types";

Introduce.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Introduce(props) {
  return (
    <section className="section__introduce">
      <div className="container">
        <h2 className="title">Giới thiệu về ADDY CRM</h2>
        <div className="introduce__grid">
          <div className="introduce__grid-left">
            <p className="fist-params">
              ADDY được thành lập năm 2021 với khát vọng mang đến giải pháp quản
              trị khách hàng miễn phí trên nền tảng ZALO và là doanh nghiệp tiên
              phong đào tạo và cung cấp giải pháp quản trị khách hàng miễn phí
              cho các doanh nghiệp nhỏ và vừa.
            </p>
            <p>
              {`ADDY phát triển sản phẩm với phương châm "CRM nâng tầm hiệu quả
              doanh nghiệp" và luôn nắm bắt các xu hướng về công nghệ để thiết
              kế giải pháp phù hợp với môi trường Việt Nam. Từ đó, giúp doanh
              nghiệp dễ dàng chuẩn hóa quy trình làm việc và phù hợp với đặc thù
              của doanh nghiệp.`}
            </p>
          </div>
          <div className="introduce__grid-right">
            <img src="../../../img/das_1.png" alt="" />
          </div>
        </div>
        <p className="params">
          Với đội ngũ trẻ trung, năng động, ADDY không ngừng học hỏi và phát
          triển tư duy để cải tiến các dịch vụ và sản phẩm, giúp khách hàng nâng
          cao vị thế của mình trên thị trường. Đặc biệt, ADDY đặt lợi ích của
          khách hàng lên hàng đầu, nên chúng tôi luôn đề cao chất lượng và uy
          tín, mang lại những sản phẩm công nghệ tốt nhất trên thị trường. Đây
          cũng là kim chỉ nam cho sự phát triển của ADDY CRM.
        </p>
      </div>
    </section>
  );
}

export default Introduce;
