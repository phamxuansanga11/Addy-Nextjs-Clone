import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPosts/NewPost";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import postsApi from "../../../pages/api/postsApi";
import categoryApi from "../../../pages/api/categoryApi";
import Loading from "../../components/loading/Loading";
import Pagination from "../../components/pagination/Pagination";
import SideBarRight from "../../components/hightlightsCare/sideBarRight/SideBarRight";
import GridItem from "../../components/hightlightsCare/gridItem/GridItem";
import ContentSearchItem from "../../components/contentSearch/contentSearchItem/ContentSearchItem";
import { useRouter } from "next/router";
// import Link from "next/link";
import moment from "moment";

function PostPage(props) {
  const [newPosts, setNewPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalElements, setTotalElements] = useState();

  //Pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [totalPages, setTotalPage] = useState();
  const [active, setActive] = useState(1);

  //Pagination Search
  const [pageSearch, setPageSearch] = useState(1);
  const [pageSizeSearch, setPageSizeSearch] = useState(6);
  const [totalPagesSearch, setTotalPageSearch] = useState();

  //bai viet noi bat
  const [remakeablePost, setRemakeablePost] = useState([]);

  //bai viet theo searchText
  const [postSearchText, setPostSearchText] = useState([]);
  const [isSearchText, setIsSearchText] = useState(false);

  //List category
  const [category, setCategory] = useState();
  const [nameCategory, setNameCategory] = useState();
  const [dataSearch, setDataSearch] = useState("");

  //bai viet view cao
  const [postByView, setPostByView] = useState();

  //func hightlight
  const handleClickCategoryList = (id, title) => {
    if (id) {
      console.log("id ne`: ", id);
      setPage(1);
      setActive(1);
      setNameCategory(title);
    }
  };

  //router
  const router = useRouter();
  const idCategoryFirstLoad = router.query.id;

  const handleSetDownCurrentPage = useCallback(() => {
    console.log("page - 1");
    if (active - 1 > 1) {
      setActive(active - 1);
      setPage((prev) => prev - 1);
    } else {
      setActive(1);
      setPage(1);
    }
  }, [active, totalPages]);
  const handleSetUpCurrentPage = useCallback(() => {
    console.log("page + 1");
    if (active + 1 <= totalPages) {
      setActive(active + 1);
      console.log("active...", active);
      setPage((prev) => prev + 1);
    } else {
      setActive(totalPages);
    }
  }, [active, totalPages]);

  //func hanlde SearchContent
  const handleSetDownCurrentPageSearch = useCallback(() => {
    console.log("page - 1");
    if (active - 1 > 1) {
      setActive(active - 1);
      setPageSearch((prev) => prev - 1);
    } else {
      setActive(1);
      setPageSearch(1);
    }
    console.log("down alo");
  }, [active, totalPagesSearch]);
  const handleSetUpCurrentPageSearch = useCallback(() => {
    console.log("page + 1");
    if (active + 1 <= totalPagesSearch) {
      console.log("total page;", totalPagesSearch);
      setPageSearch((prev) => prev + 1);
      setActive(active + 1);
      console.log("active...", active);
    } else {
      setActive(totalPagesSearch);
    }
    console.log("up  alo");
  }, [active, totalPagesSearch]);

  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setPage(pageNumber);
    setActive(pageNumber);
  };

  const paginatePageSearch = (pageNumber) => {
    setPageSearch(pageNumber);
  };

  const fetchNewPosts = async (page, pageSize) => {
    try {
      setLoading(true);
      const resNewPosts = await postsApi.getAll({
        page: `${page}`,
        pageSize: `${pageSize}`,
      });
      setNewPosts(resNewPosts?.data?.data);
      // console.log(resNewPosts?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log("goi API that bai", error);
    }
  };

  const fetchCategory = async () => {
    try {
      setLoading(true);
      const res = await categoryApi.getAll();
      setCategory(res?.data);
      setLoading(false);
    } catch (error) {
      console.log("goi API fetchPost that bai", error);
    }
  };

  const fetchPostByCategory = async (idCategoryFirstLoad) => {
    try {
      const resCategory = await categoryApi.getPostsCategory(
        idCategoryFirstLoad,
        {
          pageIndex: `${page}`,
          pageSize: `${pageSize}`,
        }
      );
      setRemakeablePost(resCategory?.data?.data);
      setNameCategory(resCategory?.data?.data[0]?.categories?.name);
      setTotalPage(resCategory?.data?.totalPages);
    } catch (error) {
      console.log("API fetchPostByCategory that bai", error);
    }
  };

  const fetchPostBySearchText = async (newValueInput) => {
    try {
      const resPostBySearchText = await postsApi.search({
        pageIndex: pageSearch,
        pageSize: pageSizeSearch,
        data: newValueInput,
      });

      setPostSearchText(resPostBySearchText?.data?.payload?.search);
      setTotalElements(resPostBySearchText?.data?.payload?.totalElements);
      console.log(resPostBySearchText);
      setTotalPageSearch(resPostBySearchText?.data?.payload?.totalPages);
      setIsSearchText(true);
    } catch (error) {
      console.log("API fetchPostBySearchText gọi thất bại", error);
    }
  };

  const fetchPostByView = async () => {
    const resPostByView = await postsApi.getPostByView();
    setPostByView(resPostByView?.data);
  };

  useEffect(() => {
    fetchNewPosts(1, 4);
    fetchCategory();
  }, [page]);

  useEffect(() => {
    if (idCategoryFirstLoad) {
      fetchPostByCategory(idCategoryFirstLoad);
    } else {
      fetchPostByCategory("62f0ce39d497346d598d8b92");
    }
  }, [page, idCategoryFirstLoad]);

  useEffect(() => {
    if (isSearchText) {
      fetchPostBySearchText(dataSearch);
    } else {
      setPage(1);
      setPageSize(pageSize);
    }
  }, [pageSearch, dataSearch]);

  // useEffect(() => {
  //   if (idCategoryFirstLoad) {
  //     setIdCategoryList(idCategoryFirstLoad);
  //   }
  // }, [idCategoryFirstLoad]);

  useEffect(() => {
    fetchPostByView();
  }, []);

  const momentFunc = (dateToFormat) => {
    return moment(dateToFormat).format("DD/MM/YYYY");
  };

  const handleOnSubmit = (newValueInput) => {
    if (newValueInput.valueSearch === "") {
      setIsSearchText(false);
      setPage(1);
      setActive(1);
    } else {
      setPageSearch(1);
      setActive(1);
      setIsSearchText(true);
      setDataSearch(newValueInput.valueSearch);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Header />
      <Search handleOnSubmit={handleOnSubmit} />
      {isSearchText ? (
        <section className="section__content-search">
          <div className="container">
            <div className="result__search">
              <p>
                Tìm thấy <span>{totalElements}</span> kết quả tìm kiếm:
              </p>
              <a className="btn__backToPosts">{`< Trở về bài viết`}</a>
              {/* <Link href="/bai-viet">
              </Link> */}
              {/* <button onClick={handleClickBack}>back to page</button> */}
            </div>
            <div className="result__content">
              <div className="result__content-grid">
                {postSearchText?.map((data, idx) => (
                  <ContentSearchItem
                    key={idx}
                    data={data}
                    momentFunc={momentFunc}
                  />
                ))}
              </div>
            </div>
            <Pagination
              totalPages={totalPagesSearch}
              paginate={paginate}
              paginatePageSearch={paginatePageSearch}
              active={active}
              handleSetDownCurrentPage={handleSetDownCurrentPage}
              handleSetUpCurrentPage={handleSetUpCurrentPage}
              handleSetDownCurrentPageSearch={handleSetDownCurrentPageSearch}
              handleSetUpCurrentPageSearch={handleSetUpCurrentPageSearch}
              isSearchText={isSearchText}
            />
          </div>
        </section>
      ) : (
        <>
          <NewPost newPosts={newPosts} momentFunc={momentFunc} />
          <section className="section__hightlights-care">
            <div className="container">
              <div className="hightlights__care">
                <div className="wrapper__grid">
                  <div className="wrapper__grid-left">
                    <h2>{nameCategory ? nameCategory : ""}</h2>
                    <div className="hightlights__care-content">
                      {remakeablePost?.map((data) => (
                        <GridItem
                          key={data._id}
                          data={data}
                          momentFunc={momentFunc}
                        />
                      ))}
                    </div>
                    <Pagination
                      totalPages={totalPages}
                      paginate={paginate}
                      paginatePageSearch={() => null}
                      active={active}
                      handleSetDownCurrentPage={handleSetDownCurrentPage}
                      handleSetUpCurrentPage={handleSetUpCurrentPage}
                      handleSetDownCurrentPageSearch={() => null}
                      handleSetUpCurrentPageSearch={() => null}
                      isSearchText={""}
                    />
                  </div>
                  <SideBarRight
                    category={category}
                    handleClickCategoryList={handleClickCategoryList}
                    idPostByCategoryDetail={idCategoryFirstLoad}
                    postByView={postByView}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default PostPage;
