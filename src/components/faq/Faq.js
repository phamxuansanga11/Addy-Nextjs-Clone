import React, { useEffect, useState } from "react";
import FaqItem from "./faqItem/FaqItem";
import FaqApi from "../../../pages/api/faqApi";

function Faq(props) {
  const [questions, setQuestions] = useState();

  const fetchFaqApi = async () => {
    const resQuestions = await FaqApi.getAll({
      pageIndex: 1,
      pageSize: 4,
    });
    setQuestions(resQuestions?.data?.data);
  };

  useEffect(() => {
    fetchFaqApi();
  }, []);

  return (
    <section className="section__faq">
      <div className="container">
        <div className="faq__title">
          <h3>Câu hỏi thường gặp</h3>
        </div>
        <div className="faq__content">
          {questions?.map((question) => (
            <FaqItem key={question?._id} question={question} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
