import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import LogoMaketing from "../logoMaketing/LogoMaketing";
import axios from "axios";
import AlertError from "../alert/alertError/AlertError";

function RegisterSuccess(props) {
  const router = useRouter();
  // const pathName = router.pathname;
  const [isShowAlertNotRegister, setIsShowAlert] = useState(false);
  const [urlLogin, setUrlLogin] = useState();

  let phoneNumber;
  if (typeof window !== "undefined") {
    localStorage.getItem("data")
      ? (phoneNumber = JSON.parse(localStorage.getItem("data")).phoneNumber)
      : (phoneNumber = "");
  }
  console.log(phoneNumber, "alo 123");
  const fetchApiLogin = async (phone) => {
    try {
      const res = await axios.post(
        "http://192.168.100.4:8107/addy-crm/api/workspaces/get-redirect-workspace-url",
        phone,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      console.log(res.data.url, "login success");
      setUrlLogin(`http://${res.data.url}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiLogin(phoneNumber);
    console.log("url login", urlLogin);
  }, []);

  return (
    <section className="section-register-success">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="../../../img/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="content__register-success">
          <div className="register-success__left">
            <div className="register-success__left-img">
              <img src="../../../img/img-register-pass3x.png" alt="" />
            </div>
            <p className="text">Được tin tưởng với 1k+ khách hàng</p>
            <LogoMaketing />
          </div>
          <div className="register-success__right">
            <div className="register-item-form">
              <div className="icon-success">
                <img src="../../../img/icon-success.png" alt="" />
              </div>
              <h2>Đăng ký thành công!</h2>
              <div className="qr-code-img">
                <img src="../../../img/qr-code.jpg" alt="" />
              </div>
              <p className="text">
                Quét mã QR để theo dõi nhiều tin tức bổ ích nhé!
              </p>
              <div className="btn__next-step">
                <a
                  href={urlLogin ? urlLogin : "/dang-ki"}
                  className={classNames({
                    "next-step": true,
                  })}
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowAlertNotRegister && (
        <AlertError isShowAlertNotRegister={isShowAlertNotRegister} />
      )}
    </section>
  );
}

export default RegisterSuccess;
