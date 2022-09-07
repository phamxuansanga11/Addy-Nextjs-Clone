import axiosClient from "./axiosClient";

const postDetailApi = {
  getAll() {
    const url = "/category";
    return axiosClient.get(url);
  },
  get(slugString) {
    const url = `/post/detail/${slugString}`;
    return axiosClient.get(url);
  },
  patch(idPostDetail) {
    const url = `/post/update/${idPostDetail}`;
    return axiosClient.patch(url);
  },
};

export default postDetailApi;
