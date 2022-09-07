import React from "react";
import PropTypes from "prop-types";
import ContentSearchItem from "./contentSearchItem/ContentSearchItem";
import Pagination from "../pagination/Pagination";
import moment from "moment";

ContentSearch.propTypes = {};

function ContentSearch(props) {
  const momentFunc = (dateToFormat) => {
    return moment(dateToFormat).format("DD/MM/YYYY");
  };

  const objData = [
    {
      id: 1,
      image: "../../../img/search-1.jpg",
      name: "Tài liệu Zalo OA",
      date: "28/09/2021",
      view: "200",
      title: 'Webinar "Triển khai CRM - Để không bao giờ thất bại!"',
      params:
        "Là một thương hiệu lâu đời đến từ Mỹ, Là một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàngBulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàng.",
    },
    {
      id: 2,
      image: "../../../img/search-2.jpg",
      name: "Các ứng dụng của crm",
      date: "12/03/2001",
      view: "200",
      title: 'Webinar "Triển khai CRM - Để không bao giờ thất bại!"',
      params:
        "Là một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàng.",
    },
    {
      id: 3,
      image: "../../../img/search-3.jpg",
      name: "Tài liệu Zalo OA",
      date: "28/09/2021",
      view: "200",
      title: 'Webinar "Triển khai CRM - Để không bao giờ thất bại!"',
      params:
        "Là một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàng.",
    },
    {
      id: 4,
      image: "../../../img/search-1.jpg",
      name: "Tài liệu Zalo OA",
      date: "28/09/2021",
      view: "200",
      title: 'Webinar "Triển khai CRM - Để không bao giờ thất bại!"',
      params:
        "Là một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàngLà một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàng.",
    },
    {
      id: 5,
      image: "../../../img/search-2.jpg",
      name: "Tài liệu Zalo OA",
      date: "28/09/2021",
      view: "200",
      title: 'Webinar "Triển khai CRM - Để không bao giờ thất bại!"',
      params:
        "Là một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàng.",
    },
    {
      id: 6,
      image: "../../../img/search-3.jpg",
      name: "Tài liệu Zalo OA",
      date: "28/09/2021",
      view: "200",
      title: 'Webinar "Triển khai CRM - Để không bao giờ thất bại!"',
      params:
        "Là một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi đối tượng khách hàng.",
    },
  ];

  return (
    <section className="section__content-search">
      <div className="container">
        <div className="result__search">
          <p>
            Tìm thấy <span>100</span> kết quả tìm kiếm:
          </p>
        </div>
        <div className="result__content">
          <div className="result__content-grid">
            {objData.map((data, idx) => (
              <ContentSearchItem
                key={idx}
                data={data}
                momentFunc={momentFunc}
              />
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
}

export default ContentSearch;
