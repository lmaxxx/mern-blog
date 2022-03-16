import {IPost} from "../types/post.types";
import axios from "axios";

const postService = {
  getPosts() {
    return axios.get<IPost[]>("api/posts")
  }
}

export default postService
