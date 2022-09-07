import React, { useEffect } from "react";
import PropTypes from "prop-types";

Services.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Services(props) {
  const { objectData, classNameFlexReverse, classNameFlexStart, marginBottom } =
    props;
  return (
    <section className={`section__services ${marginBottom}`}>
      <div className="container">
        <div className={`services__flex ${classNameFlexReverse}`}>
          <div className="services__flex-left">
            <h3 className="title">{objectData.title}</h3>
            <div className="text">
              {objectData.text.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
          <div className={`services__flex-right ${classNameFlexStart}`}>
            <img src={objectData.image} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
