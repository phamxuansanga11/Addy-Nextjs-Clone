import axiosClient from "./axiosClient";

const categoryApi = {
  getAll() {
    const url = "/category";
    return axiosClient.get(url);
  },
  getPostsCategory(id, params) {
    // const url = `/find-by-categoryId/${id}`;
    const url = `/post/find-by-categoryId/${id}`;

    return axiosClient.get(url, { params: params });
  },
  // add(data) {
  //   const url = "/contect-covid";
  //   return axiosClient.post(url, data, {});
  // },

  // update(data) {
  //   const url = `/contect-covid${data.id}`;
  //   return axiosClient.patch(url, data);
  // },
  // remove(id) {
  //   const url = `/contect-covid${id}`;
  //   return axiosClient.delete(url);
  // },
};

export default categoryApi;
