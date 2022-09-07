import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import LogoMaketing from "../logoMaketing/LogoMaketing";
import AlertError from "../alert/alertError/AlertError";
import AlertSuccess from "../alert/alertSuccess/AlertSuccess";
import axios from "axios";
import { BeatLoader } from "react-spinners";

function Register(props) {
  const refCaptcha = useRef(null);
  const refAlert = useRef(null);
  const handleDisableAlert = () => {
    if (refAlert.current) {
      clearTimeout(refAlert.current);
    }
    refAlert.current = setTimeout(() => {
      setIsShowAlertError(false);
      setIsShowAlertSuccess(false);
    }, 3000);
  };

  const router = useRouter();
  // const pathName = router.pathname;

  const [isVerify, setVerify] = useState(false);
  const [checked, setChecked] = useState(false);
  const [careers, setCareers] = useState();
  const [isShowAlertError, setIsShowAlertError] = useState(false);
  const [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  //PATTERN
  const PATTERN = {
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
    FB: /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
    VARIABLE_NAME: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
    ONLY_TWO_NUMBER: /^[0-9\b]{0,2}$/,
    ONLY_NUMBER: /^[0-9]*$/,
    LINK: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  };

  //style border red color
  const handleStyle = (name) => {
    if (errors[name]) {
      return { border: "1px solid red" };
    }
    return null;
  };
  //react-hook-form
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitFormRegister = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    console.log("data ne`:", data);
    fetchApiRegister("http://192.168.100.4:8107/addy-crm/register/v2", data);
  };

  const fetchCareer = async () => {
    try {
      const resCareer = await axios.get(
        "http://192.168.100.4:8107/addy-crm/api/role-groups/default"
      );
      setCareers(resCareer?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  //fetch Register
  const fetchApiRegister = async (urlApi, params) => {
    setIsLoadingBtn(true);
    try {
      const res = await axios.post(urlApi, null, { params: params });
      console.log("res ne` ba:", res);
      // router.push("/dang-ki-xac-thuc");
      setIsLoadingBtn(false);
      switch (res.status) {
        case 200:
          setIsShowAlertSuccess(true);
          handleDisableAlert();
          router.push("/dang-ki-xac-thuc");
          break;
        default:
          return;
      }
      setIsShowAlertSuccess(true);
      handleDisableAlert();
    } catch (error) {
      setIsLoadingBtn(false);
      console.log("loi~ goi` pa:", error);
      switch (error.response.data.message) {
        case "ACCOUNT_ALREADY_EXISTS":
          setIsShowAlertError(true);
          handleDisableAlert();
          break;
        case "Unable to send OTP":
          router.push("/dang-ki-mat-khau");
          console.log("khong the gui dc ma~");
          break;
        case "User billing already exists":
          setIsShowAlertError(true);
          handleDisableAlert();
          break;
        default:
          return;
      }
    }
  };

  const onChangeReCapcha = () => {
    setVerify(true);
  };

  const handleCheckBoxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <section className="section-workspace-register">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="../../../img/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="wrapper__grid-register">
          <div className="register-item-text">
            <img src="../../../img/register-1.png" alt="" />
            <h2>Dùng thử Addy CRM miễn phí 7 ngày</h2>
            <p>Được tin tưởng với 1k+ khách hàng</p>
            <LogoMaketing />
          </div>
          <div className="register-item-form">
            <form action="" onSubmit={handleSubmit(handleSubmitFormRegister)}>
              <div className="recaptcha-container" ref={refCaptcha}></div>
              <div className="title">Đăng ký tài khoản!</div>
              <div className="form__group">
                <label>
                  Họ và tên <span>*</span>
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Vui lòng nhập họ tên.",
                    minLength: {
                      value: 4,
                      message: "Họ tên phải tối thiểu 4 kí tự.",
                    },
                    maxLength: {
                      value: 25,
                      message: "Họ tên tối đa 14 kí tự.",
                    },
                  })}
                  style={handleStyle("fullName")}
                />
                {errors?.fullName && (
                  <small className="text-danger">
                    {errors.fullName.message}
                  </small>
                )}
              </div>
              <div className="form__group">
                <label>
                  Số điện thoại (có đăng kí zalo) <span>*</span>
                </label>
                <input
                  type="text"
                  {...register("phoneNumber", {
                    required: "Vui lòng nhập số điện thoại.",
                    pattern: {
                      value: PATTERN.PHONE,
                      message: "Số điện thoại không hợp lệ.",
                    },
                  })}
                  style={handleStyle("phoneNumber")}
                />
                {errors?.phoneNumber && (
                  <small className="text-danger">
                    {errors.phoneNumber.message}
                  </small>
                )}
              </div>
              <div className="form__group">
                <label>Tên công ty/cửa hàng (nếu có)</label>
                <input
                  type="text"
                  {...register("companyName", {
                    required: false,
                  })}
                />
              </div>
              <div className="form__group">
                <label>
                  Nghành nghề <span>*</span>
                </label>
                <select
                  className="input__select"
                  {...register("roleGroupId", { required: true })}
                >
                  {careers?.map((career) => {
                    return (
                      <option
                        key={career.id}
                        className="input__select-option"
                        value={career.id}
                      >
                        {career.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <ReCAPTCHA
                sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                // sitekey={"6LcX-IwhAAAAAH_MwK9oJjfcd5iDQFimo5BXzcfV"}
                onChange={onChangeReCapcha}
                style={{
                  transform: "scale(1.0)",
                  WebkitTransform: "scale(1.0)",
                }}
              />
              <div className="form__group-agree">
                <input
                  className="input-checkbox"
                  type="checkbox"
                  name="checkbox_agree"
                  onChange={handleCheckBoxChange}
                />
                <div className="agree__text">
                  Tôi đồng ý với{" "}
                  <Link href="/">
                    <a className="agree__text-link">quy định sử dụng </a>
                  </Link>
                  và
                  <Link a href="/">
                    <a className="agree__text-link"> chính sách bảo mật</a>
                  </Link>
                  của Addy CRM
                </div>
              </div>
              <div className="btn__next-step">
                <BeatLoader
                  loading={isLoadingBtn}
                  size={6}
                  cssOverride={{
                    opacity: "0.6",
                    position: "absolute",
                    right: "27%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <input
                  type="submit"
                  value="Tiếp theo"
                  className={classNames({
                    "next-step": true,
                    isDisable:
                      isVerify && checked ? false : true || isLoadingBtn,
                  })}
                />
              </div>
              <div className="has__account">
                <span>
                  Đã có tài khoản?
                  <Link href="/dang-nhap">
                    <a>Đăng nhập</a>
                  </Link>
                </span>
              </div>
              {/* <div className="pagination__register">
                <ul>
                  <li
                    className={classNames({
                      dot: true,
                      active: pathName === "/dang-ki",
                    })}
                  ></li>
                  <li className="dot"></li>
                  <li className="dot"></li>
                  <li className="dot"></li>
                </ul>
              </div> */}
            </form>
          </div>
          {isShowAlertError && (
            <AlertError isShowAlertError={isShowAlertError} />
          )}
          {isShowAlertSuccess && (
            <AlertSuccess isShowAlertSuccess={isShowAlertSuccess} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Register;
