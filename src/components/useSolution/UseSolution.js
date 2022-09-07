import React from "react";
import PropTypes from "prop-types";

UseSolution.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function UseSolution(props) {
  return (
    <section className="useSolution">
      <div className="use__solution-bg">
        <div className="container">
          <div className="use__solution">
            <div className="use__solution-title">
              <h2>Sử dụng giải pháp quản trị khách hàng miễn phí</h2>
            </div>
            <div className="use__solution-img">
              <img src="../../../img/use-1.png" alt="" />
            </div>
            <div className="use__solution-btn">
              <a href="">Sử dụng ngay</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseSolution;
