import React from "react";

function AlertError({
  isShowAlertError,
  isShowAlertErrorOTP,
  isShowErrorWorkSpace,
  isShowAlertNotRegister,
  isShowErrorHasWorkSpace,
}) {
  return (
    <section className="section__alert --error">
      <p className="notification">
        {isShowAlertError
          ? "Số điện thoại đăng kí đã tồn tại"
          : isShowAlertErrorOTP
          ? "Mã OTP không đúng. Vui lòng thử lại"
          : isShowErrorWorkSpace
          ? "Workspace đăng kí đã tồn tại"
          : isShowAlertNotRegister
          ? "Bạn chưa đăng kí tài khoản"
          : isShowErrorHasWorkSpace
          ? "Số điện thoại này đã đăng kí Workspace."
          : "Gửi thất bại"}
        !
      </p>
      <i className="icon">
        <img src="../../../img/icon-error.png" alt="len" />
      </i>
    </section>
  );
}

export default AlertError;
