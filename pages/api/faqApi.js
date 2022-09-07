import axiosClient from "./axiosClient";

const FaqApi = {
  getAll(params) {
    const url = "/question";
    return axiosClient.get(url, { params: params });
  },
};
export default FaqApi;
