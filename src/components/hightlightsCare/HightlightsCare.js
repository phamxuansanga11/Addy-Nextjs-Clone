import React, { useEffect, useState, useMemo, useCallback } from "react";

import PropTypes from "prop-types";
import GridItem from "./gridItem/GridItem";
import SideBarRight from "./sideBarRight/SideBarRight";

// import Pagination from "../pagination/Pagination";

HightlightsCare.propTypes = {
  dataPostPage: PropTypes.array,
  momentFunc: PropTypes.func,
  page: PropTypes.number,
  pageSize: PropTypes.number,
};

HightlightsCare.defaultProps = {
  dataPostPage: [],
  momentFunc: null,
  page: 1,
  pageSize: 5,
};

function HightlightsCare({
  dataPostPage,
  momentFunc,
  page,
  pageSize,
  totalPages,
}) {
  console.log("page:", page, "pageSize:", pageSize);
  // console.log("hehe boy:", dataPostPage);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [postsPerPage, setPostsPerPage] = useState(pageSize);

  const [params, setParams] = useState("State Params...");

  const [active, setActive] = useState(1);

  useEffect(() => {
    if (dataPostPage) {
      setPosts(dataPostPage);
    }
  }, [dataPostPage]);

  // console.log(currentPage);

  // Get current posts
  const indexOfLastPost = useMemo(
    () => currentPage * postsPerPage,
    [currentPage, postsPerPage]
  );
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  //total posts
  const totalPosts = useMemo(
    () => Math.ceil(posts?.length / postsPerPage),
    [posts, postsPerPage]
  );

  //funciton click category
  const handleClickCategoryP = useCallback(
    (title) => {
      console.log("ham` ong noi...", title);
    },
    [params]
  );

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
    setActive(pageNumber);
  }, []);

  const handleSetDownCurrentPage = useCallback(() => {
    console.log("page - 1");
    if (active - 1 > 1) {
      setActive(active - 1);
      setCurrentPage((prev) => prev - 1);
    } else {
      setActive(1);
      setCurrentPage(1);
    }
  }, [active, totalPosts]);
  const handleSetUpCurrentPage = useCallback(() => {
    console.log("page + 1");
    if (active + 1 < totalPosts) {
      setActive(active + 1);
      setCurrentPage((prev) => prev + 1);
    } else {
      setActive(totalPosts);
      setCurrentPage(totalPosts);
    }
  }, [active, totalPosts]);

  return (
    <section className="section__hightlights-care">
      <div className="container">
        <div className="hightlights__care">
          <div className="wrapper__grid">
            <div className="wrapper__grid-left">
              <h2>Tin nổi bật</h2>
              <div className="hightlights__care-content">
                {currentPosts?.map((data) => (
                  <GridItem
                    key={data._id}
                    data={data}
                    momentFunc={momentFunc}
                  />
                ))}
              </div>
            </div>
            <SideBarRight
              params={params}
              handleClickCategoryP={handleClickCategoryP}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HightlightsCare;
