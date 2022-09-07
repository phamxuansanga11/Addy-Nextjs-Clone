import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
// import OTPInput, { ResendOTP } from "otp-input-react";
import axios from "axios";
import AlertError from "../alert/alertError/AlertError";
import dynamic from "next/dynamic";
// dynamic import
const OTPInput = dynamic(
  () => {
    return import("otp-input-react");
  },
  {
    ssr: false,
  }
);

const ResendOTP = dynamic(
  () => import("otp-input-react").then((module) => module.ResendOTP),
  { ssr: false }
);

function RegisterConfirm(props) {
  const [isShowAlertError, setIsShowAlertError] = useState(false);
  const alertRef = useRef(null);

  //hanldeDisableAlertError
  const hanldeDisableAlertError = () => {
    if (alertRef) {
      clearTimeout(alertRef.current);
    }
    alertRef.current = setTimeout(() => {
      setIsShowAlertError(false);
    }, 2000);
  };

  const router = useRouter();
  const pathName = router.pathname;

  // handleSubmit OTP
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    fetchVerifyOtp();
    console.log(OTP);
  };

  //API Verify OTP
  const fetchVerifyOtp = async () => {
    try {
      const res = await axios.post(
        "http://192.168.100.4:8107/addy-crm/register/v2/confirm-otp",
        OTP,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      localStorage.setItem("token", JSON.stringify(res.data.token));
      console.log("res ne`:", res.data.token);
      router.push("/dang-ki-mat-khau");
    } catch (error) {
      setIsShowAlertError(true);
      hanldeDisableAlertError();
      console.log("Verify OTP failed...", error);
    }
  };

  const [phone, setPhone] = useState("");

  let newData;
  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      newData = JSON.parse(localStorage.getItem("data"));
      setPhone(newData.phoneNumber.slice(7));
    }
  }, []);

  const fetchResendOTP = async (phoneNumber) => {
    try {
      const res = await axios.post(
        "http://192.168.100.4:8107/addy-crm/register/v2/resend-otp",
        phoneNumber,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      console.log("res reSend", res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleResendOTP = () => {
    console.log("Resend clicked....");
    if (newData) {
      fetchResendOTP(newData.phoneNumber);
    }
  };

  //OTP
  const [OTP, setOTP] = useState();
  // customer Btn Resend
  const renderbutton = (buttonProps) => {
    return <button {...buttonProps}>Thử lại</button>;
  };
  const rendertime = (remainingTime) => {
    return <span>sau {remainingTime} giây!</span>;
  };

  return (
    <section className="section-confirm-otp">
      {isShowAlertError && (
        <AlertError isShowAlertErrorOTP={isShowAlertError} />
      )}
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="../../../img/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="content__confirm">
          <img src="../../../img/register-2.png" alt="" />
          <p className="text__content">
            {phone !== ""
              ? `Vui lòng nhập mã xác minh gồm 6 chữ số đã được gửi đến số điện thoại
              *******${phone} của bạn:`
              : "Vui lòng nhập mã xác minh gồm 6 chữ số đã được gửi đến số điện thoại của bạn"}
          </p>
          <form action="" className="form__otp" onSubmit={handleSubmitOtp}>
            <div className="otp__number">
              {typeof window !== "undefined" && (
                <OTPInput
                  value={OTP}
                  onChange={setOTP}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  inputClassName="otp__number-item"
                  secure
                />
              )}
              <div className="btn__confirm-otp">
                <input type="submit" value="Xác nhận" />
              </div>
            </div>
          </form>
          <p className="not-yes">
            Chưa nhận được mã?
            {typeof window !== "undefined" && (
              <ResendOTP
                maxTime={10}
                renderbutton={renderbutton}
                rendertime={rendertime}
                className="resend__otp"
                onResendClick={handleResendOTP}
              />
            )}
          </p>
          <div className="pagination__register">
            <ul>
              <li className="dot"></li>
              <li
                className={classNames({
                  dot: true,
                  active: pathName === "/dang-ki-xac-thuc",
                })}
              ></li>
              <li className="dot"></li>
              <li className="dot"></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterConfirm;
