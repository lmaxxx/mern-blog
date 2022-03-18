import useUser from "./useUser";
import {useQuery} from "react-query";
import settingService from "../services/settingService";
import globalService from "../services/globalService";
import {useToast} from "@chakra-ui/react";

const useSettings = (login?: string) => {
  const {setUser} = useUser()
  const toast = useToast()

  const {refetch: deletePicture} = useQuery("delete picture", () => settingService.deletePicture(), {
    onSuccess({data}) {
      setUser(data.user)
      toast({
        title: `Success 😁`,
        description: "You've deleted your picture",
        status: "success",
        isClosable: true,
        duration: 4000,
      })
    },
    enabled: false
  })

  const {refetch: updateLogin} = useQuery(["update login", login], () => settingService.updateLogin(login!), {
    onSuccess({data}) {
      setUser(data.user)
      toast({
        title: `Success 😁`,
        description: "You've updated your login",
        status: "success",
        isClosable: true,
        duration: 4000,
      })
    },
    enabled: false
  })

  return {
    deletePicture: globalService.hof(deletePicture),
    updateLogin: globalService.hof(updateLogin)
  }
}

export default useSettings
