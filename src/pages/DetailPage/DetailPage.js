import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SiderBarRight from "../../components/hightlightsCare/sideBarRight/SideBarRight";
import postDetailApi from "../../../pages/api/postDetailApi";
import Loading from "../../components/loading/Loading";
import renderHTML from "react-render-html";
import postsApi from "../../../pages/api/postsApi";

import { useRouter } from "next/router";

function SearchDetailPost(props) {
  const router = useRouter();
  const { slugString } = router.query;

  //State data từ call API
  const [postDetail, setPostDetail] = useState();
  const [listCategory, setListCategory] = useState();
  const [idPostByCategoryDetail, setIdPostByCategoryDetail] = useState();

  //bai viet view cao
  const [postByView, setPostByView] = useState();

  //State Loading
  const [loading, setLoading] = useState(false);

  const fetchPostDetail = async (slugString) => {
    try {
      setLoading(true);
      const resPostDetail = await postDetailApi.get(slugString);
      setPostDetail(resPostDetail?.data);
      setIdPostByCategoryDetail(resPostDetail?.data?.categories);
      setLoading(false);
    } catch (error) {
      console.log("API fetchPostDetail called fail...!", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const resListCategory = await postDetailApi.getAll();
      setListCategory(resListCategory?.data);
    } catch (error) {
      console.log("API fetchCategory called fail...!", error);
    }
  };

  const handleSendRequestCountView = async (idPostDetail) => {
    try {
      const resSendRequestCountView = await postDetailApi.patch(idPostDetail);
      console.log("count view successfully..!", resSendRequestCountView);
    } catch (error) {
      console.log("API handleSendRequestCountView called fail..!!", error);
    }
  };

  const handleClickCategoryList = () => {};

  const fetchPostByView = async () => {
    const resPostByView = await postsApi.getPostByView();
    setPostByView(resPostByView?.data);
    console.log(resPostByView?.data);
  };

  //useRef setTimeOutCountView count view
  const clearTimeoutRef = useRef(null);

  //call API
  useEffect(() => {
    if (slugString) {
      fetchPostDetail(slugString);
    }
  }, [slugString]);

  useEffect(() => {
    fetchCategory();
    fetchPostByView();
  }, []);

  useEffect(() => {
    if (postDetail) {
      clearTimeoutRef.current = setTimeout(
        () => handleSendRequestCountView(postDetail._id),
        15000
      );
    }
    return () => {
      clearTimeout(clearTimeoutRef.current);
    };
  }, [postDetail]);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <section className="section__search-detail-post">
        <div className="container">
          <div className="btn__backtodocument">
            <Link href="/bai-viet/">
              <a className="btn__back">{`< Trở về bài viết`}</a>
            </Link>
          </div>
          <div className="search__detail-post__grid">
            <div className="search__detail-post__grid-left">
              <h1>{postDetail?.title}</h1>
              {postDetail?.ckeditor_data
                ? renderHTML(postDetail?.ckeditor_data)
                : ""}
            </div>
            <div className="wrapper__grid-right">
              <SiderBarRight
                category={listCategory}
                handleClickCategoryList={handleClickCategoryList}
                idPostByCategoryDetail={idPostByCategoryDetail}
                postByView={postByView}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchDetailPost;
