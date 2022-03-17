import useUser from "./useUser";
import {useQuery} from "react-query";
import settingService from "../services/settingService";
import globalService from "../services/globalService";

const useSettings = () => {
  const {setUser} = useUser()

  const {refetch: deletePicture} = useQuery("delete picture", () => settingService.deletePicture(), {
    onSuccess({data}) {
      setUser(data.user)
    },
    enabled: false
  })

  return {
    deletePicture: globalService.hof(deletePicture)
  }
}

export default useSettings
