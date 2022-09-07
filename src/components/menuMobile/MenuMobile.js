import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

MenuMobile.propTypes = {};

function MenuMobile({ iconRef, handleCloseMenu, handleClickLienHe }) {
  const router = useRouter();
  const location = router.pathname;
  const locationDetail = router.asPath;
  const newLocation = locationDetail.slice(1, 9);
  const { slugString } = router.query;
  const newSlugString = slugString?.slice(0, 8);

  const { id } = router.query;

  const handleCloseMenuChild = () => {
    console.log("close menu..");
    handleCloseMenu();
  };

  return (
    <section className="menu__mobie" ref={iconRef}>
      <div className="bg__black" onClick={handleCloseMenuChild}></div>
      <div className="menu__mobile-nav">
        <div className="menu__mobile-nav-logo">
          <a href="" className="logo">
            <img src="../../../img/logo.png" alt="logo" />
          </a>
          <div
            className="btn__close-menu-mobile"
            onClick={handleCloseMenuChild}
          >
            <i className="fa fa-times"></i>
          </div>
        </div>
        <ul className="menu__mobile-nav-menu">
          <li
            className={classNames({
              active: location === "/",
            })}
          >
            <Link href="/">
              <a>Trang chủ</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active: location === "/tinh-nang",
            })}
          >
            <Link href="/tinh-nang">
              <a>Tính năng</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active:
                location === "/bai-viet" ||
                locationDetail === `/${newLocation}/${id}` ||
                newLocation === newSlugString,
            })}
          >
            <Link href="/bai-viet">
              <a>Bài viết</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active:
                location === "/tai-lieu" ||
                location === "/tai-lieu-chi-tiet" ||
                location === "/bai-viet-tim-kiem-chi-tiet",
            })}
          >
            <Link href="/tai-lieu">
              <a>Tài liệu</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active: location === "/lien-he",
            })}
          >
            <Link href="/lien-he">
              <a onClick={() => handleClickLienHe()}>Liên hệ</a>
            </Link>
          </li>
        </ul>
        <div className="menu__mobile-nav-btn">
          <div className="languages">
            <div className="languages__flag-icon">
              <img src="../../../img/flag-vn.svg" alt="" />
            </div>
            <span>VN</span>
          </div>
          <div className="btn__use">
            <Link href="/dang-ki">
              <a>Sử dụng miễn phí</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuMobile;
