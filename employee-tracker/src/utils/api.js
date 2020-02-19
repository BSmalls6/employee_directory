import axios from "axios";
import Directory from "../pages/directory"

const BASEURL = 'https://randomuser.me/api/?results=10';

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};