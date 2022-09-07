import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Footer(props) {
  return (
    <footer>
      <div className="container --container__footer">
        <div className="footer__grid">
          <div className="footer__grid-item">
            <div className="logo__footer">
              <a href="#">
                <img src="../../../img/logo-ft.png" alt="" />
              </a>
            </div>
            <a href="#" className="address">
              <span>Địa chỉ: </span>
              60B Thích Bửu Đăng, phường 1 Q.Gò Vấp, TP Hồ Chí Minh.
            </a>
            <a href="#" className="email">
              <span>Email: </span>
              contact@addy.vn
            </a>
            <a href="#" className="number__phone">
              <span>Số điện thoại: </span>
              (+84) 2862585167
            </a>
          </div>
          <div className="footer__grid-item --for__us">
            <h4 className="title">Về Addy</h4>
            <ul className="item__list">
              <li className="item__option">
                <a href="#">Giới thiệu về Addy</a>
              </li>
              <li className="item__option">
                <a href="#">Quy định sử dụng</a>
              </li>
              <li className="item__option">
                <a href="#">Chính sách sử dụng</a>
              </li>
              <li className="item__option">
                <a href="#">Trung tâm trợ giúp</a>
              </li>
            </ul>
          </div>
          <div className="footer__grid-item">
            <h4 className="title">Kết nối với chúng tôi</h4>
            <div className="item__icon">
              <a href="#" className="icon">
                <img src="../../../img/ic-fb.png" alt="" />
              </a>
              <a href="#" className="icon">
                <img src="../../../img/ic-zalo.png" alt="" />
              </a>
              <a href="#" className="icon">
                <img src="../../../img/ic-ytb.png" alt="" />
              </a>
              <a href="#" className="icon">
                <img src="../../../img/ic-link.png" alt="" />
              </a>
            </div>
            <div className="certification">
              <img src="../../../img/sale-noti.png" alt="" />
            </div>
          </div>
          <div className="footer__grid-item --download">
            <h4 className="title">Tải phần mềm</h4>
            <div className="icon__download">
              <a href="#" className="app-store --icon">
                <img src="../../../img/app-store.jpg" alt="" />
              </a>
              <a href="#" className="ch-play --icon">
                <img src="../../../img/gg-play.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
