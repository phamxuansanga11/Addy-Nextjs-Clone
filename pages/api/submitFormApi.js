import axiosClient from "./axiosClient";

const submitFormApi = {
  submit(data) {
    const url = "/contact/create";
    return axiosClient.post(url, data);
  },
};
export default submitFormApi;
