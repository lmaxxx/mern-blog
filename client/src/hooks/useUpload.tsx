import {useState} from "react"
import axios from "axios";

const useUpload = () => {
  const [data, setData] = useState<any>()
  const [isUploading, setIsUploading] = useState<boolean>()
  const [error, setError] = useState<any>()
  const [uploadProgess, setUploadProgess] = useState<number>(0)

  const upload = async (file: File) => {
    try {
      setError({})
      setIsUploading(true)
      setUploadProgess(0)

      const fd = new FormData()
      fd.append('picture', file, file.name)

      const {data} = await axios.post(`/api/picture/upload`, fd, {
        onUploadProgress(progress) {
          const percentCompleted = Math.round( (progress.loaded * 100) / progress.total )
          setUploadProgess(percentCompleted)
        }
      })
      setData(data.picture)

      setIsUploading(false)
      setUploadProgess(0)
    } catch(err) {
      setIsUploading(false)
      setUploadProgess(0)
      setError(err)
    }
  }


  return {data, isUploading, error, upload, uploadProgess}
}

export default useUpload
