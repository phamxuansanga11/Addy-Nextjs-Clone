import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import MenuMobile from "../menuMobile/MenuMobile";

Header.propTypes = {};

function Header() {
  const myRef = useRef(null);
  const iconRef = useRef(null);

  const handleClickMenu = () => {
    iconRef.current.classList.add("active");
  };

  const handleCloseMenu = () => {
    iconRef.current.classList.remove("active");
  };

  const router = useRouter();
  const location = router.pathname;
  const locationDetail = router.asPath.slice(19);
  const { slugString } = router.query;

  const handleClickLienHe = async () => {
    handleCloseMenu();
  };

  return (
    <>
      <header ref={myRef} className="header">
        <div className="container --container__header">
          <div className="header__nav">
            <div className="header__nav-logo">
              <Link href="/">
                <a>
                  <img src="../../../img/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
            <ul className="header__nav-menu">
              <li className="nav__menu-option">
                <Link href="/">
                  <a
                    className={classNames({
                      "": true,
                      active: location === "/",
                    })}
                  >
                    Trang chủ
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href="/tinh-nang">
                  <a
                    className={classNames({
                      "": true,
                      active: location === "/tinh-nang",
                    })}
                  >
                    Tính năng
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href={`/bai-viet`} scroll={false}>
                  <a
                    className={classNames({
                      "": true,
                      active:
                        location === "/bai-viet" ||
                        locationDetail === slugString,
                    })}
                  >
                    Bài viết
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href="/tai-lieu">
                  <a
                    className={classNames({
                      "": true,
                      active:
                        location === "/tai-lieu" ||
                        location === "/bai-viet-chi-tiet" ||
                        location === "/chi-tiet-tim-kiem" ||
                        location === "/tai-lieu-chi-tiet",
                    })}
                  >
                    Tài liệu
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href="/lien-he">
                  <a
                    className={classNames({
                      "": true,
                      active: location === "/lien-he",
                    })}
                  >
                    Liên hệ
                  </a>
                </Link>
              </li>
            </ul>
            <div className="header__nav-button">
              <div className="languages">
                <div className="languages__flag-icon">
                  <img src="../../../img/flag-vn.svg" alt="" />
                </div>
                <span>VN</span>
              </div>
              <Link href="/dang-ki">
                <a className="btn__use">Sử dụng miễn phí</a>
              </Link>
            </div>
            <div className="header__nav-icon__mobile" onClick={handleClickMenu}>
              <i className="fa fa-bars"></i>
            </div>
            <MenuMobile
              iconRef={iconRef}
              handleCloseMenu={handleCloseMenu}
              handleClickLienHe={handleClickLienHe}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
