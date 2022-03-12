import axios from 'axios'
import {IUserResponse} from "../../types/auth.types";

const authService = {
  getUser() {
    return axios.get<IUserResponse>("/api/user")
  }
}

export default authService
