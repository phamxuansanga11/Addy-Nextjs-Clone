import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import AddyCrm from "../../components/addyCrm/AddyCrm";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";

FeaturesPage.propTypes = {};

function FeaturesPage(props) {
  const objectData1 = {
    title: "Quản trị Zalo OA",
    text: [
      "Khai thác tối đa các dịch vụ mà zalo cung cấp",
      "Dễ dàng quản trị nhiều tài khoản zalo",
      "Tiếp cận với lượng lớn khách hàng tiềm năng",
      "Tính năng quảng cáo theo khu vực",
    ],
    image: "../../../img/feature-1.png",
  };

  const objectData2 = {
    title: "Chăm sóc khách hàng",
    text: [
      "DN phản hồi KH trực tuyến, nhanh chóng và tiện lợi",
      "Tối ưu việc củng cố mối quan hệ với KH qua các chương trình ưu đãi, tri ân",
      "Thông báo nhắc nhở lịch hẹn, lịch chăm sóc khách hàng và gửi lời chúc sinh nhật khách hàng.",
    ],
    image: "../../../img/feature-2.png",
  };

  const objectData3 = {
    title: "Quản lý khách hàng",
    text: [
      "Lưu trữ toàn bộ thông tin khách hàng.",
      "Nhanh chóng phân loại và đánh giá khách hàng tiềm năng.",
      "Dễ dàng truy suất lịch sử giao dịch của khách hàng.",
    ],
    image: "../../../img/feature-3.png",
  };

  const objectData4 = {
    title: "Hỗ trợ bán hàng",
    text: [
      "Công cụ hỗ trợ bán giúp nhân viên bán hàng dễ dàng thực hiện công việc hiệu quả",
      "Tự động hóa quy trình bán hàng, thúc đẩy nhanh chóng các giai đoạn bán hàng – chào hàng , báo giá, thương lượng, ký hợp đồng",
    ],
    image: "../../../img/feature-4.png",
  };

  const objectData5 = {
    title: "Quản lý chiến dịch MKT",
    text: [
      "Quản lý các kênh marketing, xây dựng mục tiêu và đo lường hiệu quả chiến dịch marketing.",
      "Dễ dàng thực hiện các chiến dịch nhằm tăng mức độ nhận diện thương hiệu của DN",
      "Kết nối với khách hàng trên mọi kênh Zalo, Social Media, Website,..đánh giá hiệu quả của việc tiếp cận, xác định thời điểm và kênh giao tiếp tốt nhất",
    ],
    image: "../../../img/feature-5.png",
  };

  const objectData6 = {
    title: "Báo cáo - Thống kê",
    text: [
      "Giúp DN nhìn nhận được toàn diện về hoạt động kinh doanh, tình trạng CHKH, hiệu quả của đội ngũ nhân viên.",
      "Giúp DN điều chỉnh kế hoạch bán hàng, kế hoạch truyền thông, chương trình khuyến mãi nhằm đạt được mục tiêu kinh doanh",
      "Kết nối với khách hàng trên mọi kênh Zalo, Social Media, Website,..đánh giá hiệu quả của việc tiếp cận, xác định thời điểm và kênh giao tiếp tốt nhất",
    ],
    image: "../../../img/feature-6.png",
  };

  const objectData7 = {
    title: "Tích hợp đa kênh",
    text: [
      "Kết nối với khách hàng trên mọi kênh như Zalo, Website, Social Media, phần mềm bán hàng, ...để đánh giá hiệu quả của việc tiếp cận, xác định thời điểm và kênh giao tiếp tốt nhất. Ngoài ra các dữ liệu sẽ được đồng bộ và quản lý trên một nền tảng duy nhất",
    ],
    image: "../../../img/feature-7.png",
  };

  const objectData8 = {
    title: "Quản lý công việc",
    text: [
      "Chuẩn hóa quy trình làm việc giúp DN đơn giản trong việc quản lý và phân chia công việc.",
      "Dễ dàng mở rộng theo đặc thù của doanh nghiệp (customization).",
    ],
    image: "../../../img/feature-8.png",
  };

  return (
    <>
      <Header />
      <AddyCrm
        classNameTitle={"fs__title"}
        title={"Giải pháp quản trị khách hàng"}
        p={
          "Nâng cao hiệu quả quản lý - Gia tăng doanh số - Tiết kiệm thời gian - Xây dựng khách hàng trung thành"
        }
      />
      <Services objectData={objectData1} />
      <Services
        objectData={objectData2}
        classNameFlexReverse={"--flex__reverse"}
        classNameFlexStart={"--flex__start"}
      />
      <Services objectData={objectData3} />
      <Services
        objectData={objectData4}
        classNameFlexReverse={"--flex__reverse"}
        classNameFlexStart={"--flex__start"}
      />
      <Services objectData={objectData5} />
      <Services
        objectData={objectData6}
        classNameFlexReverse={"--flex__reverse"}
        classNameFlexStart={"--flex__start"}
      />
      <Services objectData={objectData7} />
      <Services
        objectData={objectData8}
        classNameFlexReverse={"--flex__reverse"}
        classNameFlexStart={"--flex__start"}
        marginBottom={"--margin__bottom"}
      />
      <Footer />
    </>
  );
}

export default FeaturesPage;
