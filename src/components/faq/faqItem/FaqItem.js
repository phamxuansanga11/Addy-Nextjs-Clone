import React from "react";
import PropTypes from "prop-types";

FaqItem.propTypes = {
  question: PropTypes.object,
};
FaqItem.defaultProps = {
  question: {},
};

function FaqItem({ question }) {
  return (
    <div className="faq__content-item">
      <div className="title__item">
        <i>
          <img src="../../../img/question-ic.svg" alt="" />
        </i>
        <h5>{question?.question}</h5>
      </div>
      <p className="text__item">{question?.answer}</p>
    </div>
  );
}

export default FaqItem;
