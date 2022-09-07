import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Controller } from "swiper";

Slider.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Slider(props) {
  const swiper1Ref = useRef();
  const swiper2Ref = useRef();

  useEffect(() => {
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, []);

  return (
    <section className="section__slider">
      <div className="container">
        <h2>Lợi ích mà Addy mang lại cho Doanh Nghiệp</h2>
        <div className="slider__title">
          <button className="review-swiper-button-prev">
            <i>
              <img src="../../../img/arr-left.png" alt="" />
            </i>
          </button>
          <button className="review-swiper-button-next">
            <i>
              <img src="../../../img/arr-right.png" alt="" />
            </i>
          </button>
          <Swiper
            modules={[Navigation, Pagination, Controller]}
            onSwiper={(swiper) => {
              swiper1Ref.current = swiper;
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            centeredSlides={true}
          >
            <SwiperSlide>Zalo</SwiperSlide>
            <SwiperSlide>CRM Chuẩn</SwiperSlide>
            <SwiperSlide>Sản Phẩm</SwiperSlide>
          </Swiper>
        </div>
        <div className="slider__content">
          <Swiper
            modules={[Navigation, Pagination, Controller]}
            onSwiper={(swiper) => {
              swiper2Ref.current = swiper;
            }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <div className="slider__content-grid">
                <div className="grid__left">
                  <h3 className="grid__left-sub-title">Zalo</h3>
                  <div className="grid__left-content">
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Cải thiện hiệu quả phễu bán hàng</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Khai thác tối đa các dịch vụ mà zalo cung cấp</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Dễ dàng quản trị nhiều tài khoản zalo</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Tiếp cận với lượng lớn khách hàng tiềm năng</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Tính năng quảng cáo theo khu vực</span>
                    </div>
                  </div>
                </div>
                <div className="grid__right">
                  <img src="../../../img/benefit-2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__content-grid">
                <div className="grid__left">
                  <h3 className="grid__left-sub-title">CRM Chuẩn</h3>
                  <div className="grid__left-content">
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Cải thiện hiệu quả phễu bán hàng</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Khai thác tối đa các dịch vụ mà zalo cung cấp</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Dễ dàng quản trị nhiều tài khoản zalo</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Tiếp cận với lượng lớn khách hàng tiềm năng</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Tính năng quảng cáo theo khu vực</span>
                    </div>
                  </div>
                </div>
                <div className="grid__right">
                  <img src="../../../img/benefit-2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__content-grid">
                <div className="grid__left">
                  <h3 className="grid__left-sub-title">Sản phẩm</h3>
                  <div className="grid__left-content">
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Cải thiện hiệu quả phễu bán hàng</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Khai thác tối đa các dịch vụ mà zalo cung cấp</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Dễ dàng quản trị nhiều tài khoản zalo</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Tiếp cận với lượng lớn khách hàng tiềm năng</span>
                    </div>
                    <div className="grid__left-content-item">
                      <i>
                        <img src="../../../img/ic-check.svg" alt="" />
                      </i>
                      <span>Tính năng quảng cáo theo khu vực</span>
                    </div>
                  </div>
                </div>
                <div className="grid__right">
                  <img src="../../../img/benefit-1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Slider;
