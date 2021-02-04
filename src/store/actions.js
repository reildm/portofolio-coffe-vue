import axios from "axios";
// import qs from 'querystring'
import api from "./api";
// import mutations from './mutations'

export default {
  // eslint-disable-next-line
  async getItem({}, data) {
    const url = api.url + data.url + "?_page=" + data.page + "&_limit=" + data.limit;
    try {
      const response = await axios.get(url, {
        credentials: true,
      });
      return response;
    } catch (err) {
      return err.response;
    }
  },
};
