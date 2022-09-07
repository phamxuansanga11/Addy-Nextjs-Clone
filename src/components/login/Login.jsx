import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  // //PATTERN
  // const PATTERN = {
  //   EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  //   PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
  //   FB: /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
  //   VARIABLE_NAME: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
  //   ONLY_TWO_NUMBER: /^[0-9\b]{0,2}$/,
  //   ONLY_NUMBER: /^[0-9]*$/,
  //   LINK: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  // };
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

  //fetchUrlLogin
  const fetchApiLogin = async (phone) => {
    try {
      const res = await axios.post(
        "http://192.168.100.4:8107/addy-crm/api/workspaces/get-redirect-workspace-url",
        phone.phoneNumber,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      console.log("res login:", res.data.url);
      router.push(`http://${res.data.url}`);
    } catch (error) {
      switch (error.response.data.message) {
        case "Workspace does not exist":
          setError("phoneNumber", {
            type: "exists",
            message: "Tên workspace hoặc số điện thoại không đúng.",
          });
          break;
        default:
          return;
      }
      console.log(error);
    }
  };

  const handleSubmitFormLogin = (data) => {
    fetchApiLogin(data);
    console.log("login ne`", data);
  };

  return (
    <section className="section-login">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="../../../img/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="form__login">
          <form action="" onSubmit={handleSubmit(handleSubmitFormLogin)}>
            <h2>Đăng nhập</h2>
            <div className="form__group">
              <label>Số điện thoại hoặc workspace:</label>
              <input
                type="text"
                {...register("phoneNumber", {
                  required: false,
                })}
                style={handleStyle("phoneNumber")}
              />
              {errors?.phoneNumber && (
                <small className="text-danger">
                  {errors.phoneNumber.message}
                </small>
              )}
            </div>
            <div className="btn__next-step">
              <input type="submit" value="Đăng nhập" className="next-step" />
            </div>
          </form>
          <div className="register__btn-wrapper">
            <p>Chưa có tài khoản?</p>
            <Link href="/dang-ki">
              <a className="btn__to-register">Đăng kí</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
