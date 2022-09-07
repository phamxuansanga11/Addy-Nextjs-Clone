import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import LogoMaketing from "../logoMaketing/LogoMaketing";
import { useForm } from "react-hook-form";
import axios from "axios";
import AlertError from "../../components/alert/alertError/AlertError";

RegisterPassword.propTypes = {};

function RegisterPassword(props) {
  const router = useRouter();

  const [isShowErrorWorkSpace, setIsShowErrorWorkSpace] = useState(false);
  const [isShowErrorHasWorkSpace, setIsShowErrorHasWorkSpace] = useState(false);

  //PATTERN
  const PATTERN = {
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
    FB: /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
    VARIABLE_NAME: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
    ONLY_TWO_NUMBER: /^[0-9\b]{0,2}$/,
    ONLY_NUMBER: /^[0-9]*$/,
    LINK: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    WORKSPACE: /^(?=.*?[a-z]).{3,}$/,
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
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  let tokens;
  if (typeof window !== "undefined") {
    localStorage.getItem("token")
      ? (tokens = JSON.parse(window.localStorage.getItem("token")))
      : (tokens = "");
  }

  //handleDisable Alert
  const alertRef = useRef(null);
  const handleDisableAlert = (setAlert) => {
    if (alertRef.current) {
      clearTimeout(alertRef.current);
    }
    alertRef.current = setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const handleSubmitFormRegisterPass = (data) => {
    console.log("data ne` pa:", {
      token: tokens,
      phoneNumber: newData.phoneNumber,
      password: data.passWord,
      workspace: data.workSpace,
    });

    fetchRegisterWorkSpace({
      token: tokens,
      phoneNumber: newData.phoneNumber,
      password: data.passWord,
      workspace: data.workSpace,
    });
  };

  let newData;
  if (typeof window !== "undefined") {
    //phoneNumber localstorage
    newData = JSON.parse(localStorage.getItem("data"));
  }

  //fetchRegisterWorkSpace
  const fetchRegisterWorkSpace = async (dataNew) => {
    try {
      const res = await axios.post(
        "http://192.168.100.4:8107/addy-crm/register/v2/workspace",
        { ...dataNew }
      );
      console.log("registerWorkSpace thanh` cong:", res);
      router.push("/dang-ki-thanh-cong");
      JSON.stringify(localStorage.setItem("token", ""));
    } catch (error) {
      console.log(error);
      switch (error.response.data.message) {
        case "Workspace already exists":
          setIsShowErrorWorkSpace(true);
          setError("workSpace", {
            type: "exists",
            message: "Tên Workspace này đã tồn tại.",
          });
          handleDisableAlert(setIsShowErrorWorkSpace);
          break;
        case "INVALID_WORKSPACE":
          setError("workSpace", {
            type: "exists",
            message: "Tên Workspace không được chứa khoảng trắng.",
          });
          break;
        case "Invalid token!":
          router.push("/dang-ki");
          break;
        case "Account has workspace, please wait for contact from sales staff":
          setIsShowErrorHasWorkSpace(true);
          handleDisableAlert(setIsShowErrorHasWorkSpace);
          break;
        default:
          return;
      }
    }
  };

  return (
    <section className="section__register-password">
      {isShowErrorWorkSpace && (
        <AlertError isShowErrorWorkSpace={isShowErrorWorkSpace} />
      )}
      {isShowErrorHasWorkSpace && (
        <AlertError isShowErrorHasWorkSpace={isShowErrorHasWorkSpace} />
      )}
      <div className="container">
        <div className="logo">
          <Link href="">
            <a>
              <img src="../../../img/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="content__register-password">
          <div className="register-password__left">
            <div className="register-password__left-img">
              <img src="../../../img/img-register-pass3x.png" alt="" />
            </div>
            <LogoMaketing />
          </div>
          <div className="register-password__right">
            <div className="register-item-form">
              <form
                action=""
                onSubmit={handleSubmit(handleSubmitFormRegisterPass)}
              >
                <div className="form__title">
                  <h2>Không gian làm việc</h2>
                </div>
                <div className="form__group">
                  <label>
                    Số điện thoại đăng nhập <span>*</span>
                  </label>
                  <input
                    type="text"
                    value={newData ? newData.phoneNumber : ""}
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
                  <label>
                    Mật khẩu <span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Ít nhất 8 ký tự  không bao gồm khoảng trắng"
                    {...register("passWord", {
                      required: "Vui lòng nhập mật khẩu.",
                      pattern: {
                        value: PATTERN.PASSWORD,
                        message: "Mật khẩu chưa tối ưu.",
                      },
                    })}
                    style={handleStyle("passWord")}
                  />
                  {errors?.passWord && (
                    <small className="text-danger">
                      {errors.passWord.message}
                    </small>
                  )}
                </div>
                <div className="form__group">
                  <label>
                    Workspace của bạn <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ít nhất 3 ký tự chữ cái và số"
                    {...register("workSpace", {
                      required: "Vui lòng nhập Workspace.",
                      pattern: {
                        value: PATTERN.WORKSPACE,
                        message: "Tên Workspace chưa đúng định dạng.",
                      },
                    })}
                    style={handleStyle("workSpace")}
                  />
                  {errors?.workSpace && (
                    <small className="text-danger">
                      {errors.workSpace.message}
                    </small>
                  )}
                </div>
                <div className="btn__next-step">
                  <input
                    type="submit"
                    value="Tiếp theo"
                    className="next-step"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPassword;
