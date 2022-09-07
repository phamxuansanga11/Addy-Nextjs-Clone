import axiosClient from "./axiosClient";

const postsApi = {
  getAll(params) {
    const url = "/post";
    return axiosClient.get(url, { params: params });
  },
  get(category, id, params) {
    const url = `/${category}/${id}`;
    return axiosClient.get(url, params);
  },
  search(payload) {
    const url = "/post/search";
    return axiosClient.post(url, { payload: payload });
  },
  getPostByView() {
    const url = "/post/get-post-by-view";
    return axiosClient.get(url);
  },
};

export default postsApi;
