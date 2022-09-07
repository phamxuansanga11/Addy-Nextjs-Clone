import React from "react";
import PropTypes from "prop-types";

SupportChannel.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function SupportChannel(props) {
  return (
    <section className="section__support-channel">
      <div className="container">
        <h2 className="title">Các kênh hỗ trợ</h2>
        <div className="support__channel-grid">
          <div className="support__channel-grid__item">
            <img src="../../../img/ico-zalo-1_1.png" alt="" />
            <h4>Zalo OA</h4>
            <p>
              Cập nhật, phản hồi thông tin nhanh chóng & chính xác thông qua
              ZALO OA
            </p>
          </div>
          <div className="support__channel-grid__item">
            <img src="../../../img/carbon_phone-voice-filled.png" alt="" />
            <h4>Đường dây nóng</h4>
            <p>
              Hotline: 1900 1111 Hoạt động từ 8:00 - 22:00 (kể cả ngày nghỉ, lễ,
              tết)
            </p>
          </div>
          <div className="support__channel-grid__item">
            <img src="../../../img/ic-pdf.png" alt="" />
            <h4>Tài liệu hướng dẫn</h4>
            <p>Xem tài liệu hướng dẫn sử dụng phần mềm ADDY CRM</p>
          </div>
          <div className="support__channel-grid__item">
            <img src="../../../img/2111641_1.png" alt="" />
            <h4>Ultraviewer/Teamviewer</h4>
            <p>
              Nhân viên ADDY có thể kiểm tra và hỗ trợ trực tiếp trên máy của
              bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportChannel;
