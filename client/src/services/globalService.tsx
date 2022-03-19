import axios from "axios";

const globalService = {
  hof(callback: (...args: any[]) => any) {
    return callback
  },

  async uploadPicture(file: File) {
    const fd = new FormData()
    fd.append('picture', file, file.name)

    const {data} = await axios.post(`/api/picture/upload`, fd)

    return data
  },
}


export default globalService
