import axios from "axios";

const apiTest = axios.create({
  baseURL: "http://192.168.100.4:8107/addy-crm/register/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiTest;
