import React from "react";
import PropTypes from "prop-types";

AddyCrm.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function AddyCrm({ classNameTitle, title, h3, p }) {
  return (
    <section className="section__homepage">
      <div className="bg__homepage">
        <div className="container --container__homepage">
          <div className="wrapper__grid">
            <div className="wrapper__grid-left">
              <h4 className={classNameTitle}>{title}</h4>
              <h3>{h3}</h3>
              <p>{p}</p>
            </div>
            <div className="wrapper__grid-right">
              <img src="../../../img/home-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddyCrm;
