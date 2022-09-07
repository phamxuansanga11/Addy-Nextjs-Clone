import React from "react";
import PropTypes from "prop-types";
import Search from "../../components/search/Search";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import VideoSupport from "../../components/videoSupport/VideoSupport";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

DocumentPage.propTypes = {};

function DocumentPage(props) {
  return (
    <>
      <Header />
      <Search />
      <Features />
      <VideoSupport />
      <Faq />
      <Footer />
    </>
  );
}

export default DocumentPage;
