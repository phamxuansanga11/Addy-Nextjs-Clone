import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

TabContent.propTypes = {};

function TabContent(props) {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Quản lý tài khoản",
      content:
        "ZALO là nền tảng mạng xã hội có nhiều người dùng nhất Việt Nam, do đó ADDY CRM mang đến tính năng quản trị ZALO OA giúp doanh nghiệp tiếp cận được với lượng lớn khách hàng tiềm năng này. Với ADDY, doanh nghiệp dễ dàng quản trị đồng thời nhiều tài khoản ZALO và khai thác tối đa các dịch vụ mà ZALO cung cấp. Ngoài ra, ADDY cũng hỗ trợ quảng cáo theo từng khu vực của tệp khách hàng tiềm năng mà doanh nghiệp mong muốn.",
    },
    {
      id: 2,
      tabTitle: "Tạo mới tài khoản",
      content:
        "ZALO là nền tảng mạng xã hội có nhiều người dùng nhất Việt Nam, do đó ADDY CRM mang đến tính năng quản trị ZALO OA giúp doanh nghiệp tiếp cận được với lượng lớn khách hàng tiềm năng này. Với ADDY, doanh nghiệp dễ dàng quản trị đồng thời nhiều tài khoản ZALO và khai thác tối đa các dịch vụ mà ZALO cung cấp. 2",
    },
    {
      id: 3,
      tabTitle: "Quản lý bài viết",
      content:
        "ZALO là nền tảng mạng xã hội có nhiều người dùng nhất Việt Nam, do đó ADDY CRM mang đến tính năng quản trị ZALO OA giúp doanh nghiệp tiếp cận được với lượng lớn khách hàng 3",
    },
    {
      id: 4,
      tabTitle: "Tạo bài viết mới",
      content:
        "ZALO là nền tảng mạng xã hội có nhiều người dùng nhất Việt Nam, do đó ADDY CRM mang đến tính năng quản trị ZALO OA  4",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <section className="section__tabcontent">
      <div className="container">
        <div className="backtopageprev">
          <Link href="/tai-lieu">
            <a className="active">Tài liệu</a>
          </Link>
          <span>{`>`}</span>
          <a href="">Quản trị Zalo OA</a>
        </div>
        <div className="wrapper__grid">
          <div className="wrapper__grid-left">
            <h2>Quản lý Zalo OA</h2>
            <ul className="list">
              {tabs.map((tab, idx) => (
                <li
                  key={idx}
                  className={classNames({
                    option: true,
                    active: currentTab == tab.id,
                  })}
                >
                  <i>
                    <img src="../../../img/ic-multi-arr.svg" alt="" />
                  </i>
                  <span id={tab.id} onClick={handleTabClick}>
                    {tab.tabTitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="wrapper__grid-right">
            <div className="params__contents params">
              {tabs.map((tab, idx) => (
                <div key={idx}>
                  {currentTab === `${tab.id}` && (
                    <div>
                      <h3>{tab.tabTitle}</h3>
                      <p>{tab.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabContent;
