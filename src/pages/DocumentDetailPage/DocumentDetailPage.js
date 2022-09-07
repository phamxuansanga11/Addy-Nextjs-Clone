import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import TabContent from "../../components/tabContent/TabContent";
import UseSolution from "../../components/useSolution/UseSolution";
import Footer from "../../components/footer/Footer";

DocumentPage.propTypes = {};

function DocumentPage(props) {
  return (
    <>
      <Header />
      <Search />
      <TabContent />
      <UseSolution />
      <Footer />
    </>
  );
}

export default DocumentPage;
