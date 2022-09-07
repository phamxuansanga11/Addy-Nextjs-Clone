import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import submitFormApi from "../../../pages/api/submitFormApi";
import AlertSuccess from "../alert/alertSuccess/AlertSuccess";
import AlertError from "../alert/alertError/AlertError";
import classNames from "classnames";
import { useRouter } from "next/router";

ContactForm.propTypes = {
  handleScrollContactForm: PropTypes.func,
};

ContactForm.defaultProps = {
  handleScrollContactForm: null,
};

function ContactForm({ handleScrollContactForm }) {
  const router = useRouter();

  const [varUp, setVarUp] = useState(1);

  const [isDisable, setIsDisable] = useState(false);

  const [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false);
  const [isShowAlertError, setIsShowAlertError] = useState(false);

  useEffect(() => {
    if (router.pathname === "/lien-he") {
      setVarUp((prev) => prev + 1);
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchApiSubmit = async (data) => {
    try {
      setIsDisable(true);
      const res = await submitFormApi.submit(data);
      console.log("res form data:", res);
      setIsShowAlertSuccess(true);
      handleShowAlert(setIsShowAlertSuccess);
      setIsDisable(false);
    } catch (error) {
      setIsShowAlertError(true);
      handleShowAlert(setIsShowAlertError);
      setIsDisable(false);
      console.log("error", error);
    }
  };

  const onSubmit = (data) => {
    fetchApiSubmit(data);
    console.log(data);
  };
  const handleStyle = (name) =>
    errors[name] ? { border: "1px solid red" } : null;

  const PATTERN = {
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
    FB: /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
    VARIABLE_NAME: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
    ONLY_TWO_NUMBER: /^[0-9\b]{0,2}$/,
    ONLY_NUMBER: /^[0-9]*$/,
    LINK: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  };

  const contactRef = useRef();

  useEffect(() => {
    handleScrollContactForm(contactRef.current);
  }, [varUp]);

  //clear and setTimeOut show Alert
  const setTimeOutRef = useRef(null);
  const handleShowAlert = (setState) => {
    if (setTimeOutRef.current) {
      clearTimeout(setTimeOutRef.current);
    }
    setTimeOutRef.current = setTimeout(() => {
      setState(false);
    }, 2500);
  };

  return (
    <section
      className="section__contact-form position-relative"
      ref={contactRef}
    >
      <div className="contact__bg">
        <div className="contact__bg-top">
          <img src="../../../img/bg-top.png" alt="" />
        </div>
        <div className="contact__bg-bottom">
          <img src="../../../img/bg-bottom.png" alt="" />
        </div>
        <div className="container">
          <div className="wrapper__form-contact">
            <div className="contact__text">
              <h4>Đăng kí nhận tư vấn miễn phí</h4>
              <p>
                Addy thấu hiểu và luôn mong muốn giúp doanh nghiệp tiếp cận được
                với nhiều khách hàng bằng quy trình bài bản, các công việc được
                tự động hóa thông qua nền tảng CRM giúp tăng năng xuất và gia
                tăng doanh thu bền vững.
              </p>
            </div>
            <div className="contact__form">
              <form
                action=""
                className="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h2>Đăng ký nhận tư vấn</h2>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder={`Họ & Tên...`}
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
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại của bạn..."
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
                  <input
                    type="text"
                    placeholder="Nhập email của bạn..."
                    {...register("email", {
                      required: { value: true, message: "FAIL" },
                      pattern: {
                        value: PATTERN.EMAIL,
                        message: "Wrong Email",
                      },
                    })}
                    style={handleStyle("email")}
                  />
                  {errors.email?.message === "FAIL" && (
                    <small className="text-danger">Vui lòng nhập Email.</small>
                  )}
                  {errors.email?.message === "Wrong Email" && (
                    <small className="text-danger">
                      Email không đúng định dạng.
                    </small>
                  )}
                </div>
                <div className="form__group">
                  <textarea
                    className="textarea"
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Nhu cầu của bạn..."
                    {...register("demand", { required: true })}
                    style={handleStyle("demand")}
                  ></textarea>
                  {errors.demand && (
                    <small className="text-danger">
                      Hãy nhập nhu cầu của bạn.
                    </small>
                  )}
                </div>
                <input
                  className={classNames({
                    btn__submit: true,
                    disable__btn: isDisable,
                  })}
                  type="submit"
                  value="Đăng kí"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {isShowAlertSuccess && <AlertSuccess />}
      {isShowAlertError && <AlertError />}
    </section>
  );
}

export default ContactForm;
