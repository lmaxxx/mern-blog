import axios from 'axios'
import {AuthProvider, IUserResponse} from "../types/auth.types";

const authService = {
  getUser() {
    return axios.get<IUserResponse>("/api/user")
  },

  logout() {
    return axios.get<IUserResponse>("/api/logout")
  },

  auth(provider: AuthProvider) {
    window.open(`http://localhost:8080/api/auth/${provider}`, "_self")
  }
}

export default authService
