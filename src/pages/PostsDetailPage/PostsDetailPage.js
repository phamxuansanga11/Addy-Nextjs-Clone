import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import BgPostsDetail from "../../components/bgPostsDetail/BgPostsDetail";
import Introduce from "../../components/introduce/Introduce";
import VisionAndMission from "../../components/visionAndMission/VisionAndMission";
import UseSolution from "../../components/useSolution/UseSolution";
import SupportChannel from "../../components/supportChannel/SupportChannel";
import Footer from "../../components/footer/Footer";

PostsDetail.propTypes = {};

function PostsDetail(props) {
  return (
    <>
      <Header />
      <BgPostsDetail />
      <Introduce />
      <VisionAndMission />
      <UseSolution />
      <SupportChannel />
      <Footer />
    </>
  );
}

export default PostsDetail;
