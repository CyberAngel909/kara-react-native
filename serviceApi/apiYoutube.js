import axios from "axios";
const KEY = "AIzaSyAT7LC6cG23T7jqAwBJDZeUeR6x-s6FLtA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
  headers: {},
});
