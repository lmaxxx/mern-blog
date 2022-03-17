import axios from "axios";
import {IUserResponse} from "../types/auth.types";

const settingService = {
  deletePicture() {
    return axios.patch<IUserResponse>("/api/user/deletePicture")
  }
}

export default settingService
