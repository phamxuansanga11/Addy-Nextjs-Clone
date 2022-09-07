import React from "react";

function AlertSuccess({ isShowAlertSuccess }) {
  return (
    <section className="section__alert --succsess">
      <p className="notification">
        {isShowAlertSuccess ? "Đăng ký thành công" : "Gửi thành công!"}
      </p>
      <i className="icon">
        <img src="../../../img/icon-success.png" alt="icon" />
      </i>
    </section>
  );
}

export default AlertSuccess;
