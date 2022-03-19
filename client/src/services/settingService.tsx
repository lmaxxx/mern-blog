import axios from "axios";
import {IUserResponse} from "../types/auth.types";

const settingService = {
  deletePicture() {
    return axios.delete<IUserResponse>("/api/user/picture")
  },

  updateLogin(login: string) {
    return axios({
      method: "PATCH",
      url: "api/user/login",
      data: {
        login
      }
    })
  },

  updatePicture(picture: string) {
    return axios({
      method: "PATCH",
      url: "api/user/picture",
      data: {
        picture
      }
    })
  },

  validateLogin(newLogin: string, oldLogin: string) {
    if(newLogin === oldLogin) return true

    if(newLogin.trim().length < 3) {
      return true
    }
  },

  validatePicture(picture: string) {
    if (picture === "https://teamgreen.org.in/wp-content/uploads/2019/07/boy-avatar-3.png") return true
  }
}

export default settingService
