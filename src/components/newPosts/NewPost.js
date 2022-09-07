import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

NewPost.propTypes = {
  newPosts: PropTypes.array,
  momentFunc: PropTypes.func,
};

NewPost.defaultProps = {
  newPosts: [],
  momentFunc: null,
};

function NewPost({ newPosts, momentFunc }) {
  const [threeItem, setThreeItem] = useState();
  const [oneItem, setOneItem] = useState();

  useEffect(() => {
    if (newPosts?.length > 0) {
      setOneItem(newPosts[0]);
      setThreeItem(newPosts.slice(1));
    }
  }, [newPosts]);

  return (
    <section className="section__newpost">
      <div className="container">
        <div className="new__post">
          <div className="new__post-title">
            <h2>Bài viết mới nhất</h2>
          </div>
          <div className="new__post-grid">
            <div className="grid__left --grid">
              <Link
                key={oneItem?._id}
                href={`/bai-viet-chi-tiet/${oneItem?.slugString}`}
              >
                <a className="grid__item">
                  <img src={oneItem?.urlImage} alt="" />
                  <div className="grid__item-text">
                    <h3 className="title">{oneItem?.title}</h3>
                    <div className="time">
                      <div className="time__icon">
                        <i>
                          <img src="../../../img/ic-mess.svg" alt="comment" />
                        </i>
                        <span>2</span>
                      </div>
                      <span className="dot">-</span>
                      <span> {momentFunc(oneItem?.created_at)} </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="grid__right --grid">
              {threeItem?.map((data) => (
                <Link
                  key={data._id}
                  href={`/bai-viet-chi-tiet/${data?.slugString}`}
                >
                  <a className="grid__item">
                    <img src={data?.urlImage} alt="" />
                    <div className="grid__item-text">
                      <h3 className="title">{data?.title}</h3>
                      <div className="time">
                        <div className="time__icon">
                          <i>
                            <img src="../../../img/ic-mess.svg" alt="comment" />
                          </i>
                          <span>2</span>
                        </div>
                        <span className="dot"> - </span>
                        <span>{momentFunc(data?.created_at)}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewPost;
