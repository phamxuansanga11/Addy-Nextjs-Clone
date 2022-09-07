import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import ContentSearch from "../../components/contentSearch/ContentSearch";
import Footer from "../../components/footer/Footer";

SearchDetail.propTypes = {};

function SearchDetail(props) {
  return (
    <section className="main__search-detail-page">
      <Header />
      <Search />
      <ContentSearch />
      <Footer />
    </section>
  );
}

export default SearchDetail;
