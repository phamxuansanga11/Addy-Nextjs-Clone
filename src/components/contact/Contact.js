import React from "react";
import PropTypes from "prop-types";

Contact.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Contact(props) {
  return (
    <section className="section__contact">
      <div className="container">
        <div className="contact">
          <div className="contact__title">
            <h2>Nếu có bất kì câu hỏi nào, hãy liên hệ ngay với chúng tôi.</h2>
          </div>
          <div className="contact__btn">
            <a href="" className="contact__btn-hotline --btn">
              <i>
                <img src="../../../img/Calling.svg" alt="icon" />
              </i>
              <span>Hotline (+84) 2862585167</span>
            </a>
            <a href="" className="contact__btn-email --btn">
              <i>
                <img src="../../../img/Message.svg" alt="icon" />
              </i>
              <span>Email contact@addy.vn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
