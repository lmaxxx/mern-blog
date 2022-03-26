import {useState} from "react"
import axios from "axios";
import {Simulate} from "react-dom/test-utils";

const useUpload = () => {
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>()
  const [error, setError] = useState<any>()
  const [uploadProgess, setUploadProgess] = useState<number>(0)

  const upload = async (file: File) => {
    try {
      setError({})
      setIsLoading(true)
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

      setIsLoading(false)
      setUploadProgess(0)
    } catch(err) {
      setIsLoading(false)
      setUploadProgess(0)
      setError(err)
    }
  }


  return {data, isLoading, error, upload, uploadProgess}
}

export default useUpload
