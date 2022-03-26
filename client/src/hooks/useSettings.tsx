import useUser from "./useUser";
import {useMutation, useQuery} from "react-query";
import settingService from "../services/settingService";
import globalService from "../services/globalService";
import {useToast} from "@chakra-ui/react";


const useSettings = () => {
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

  const {mutateAsync: updateLogin} = useMutation("update login", (newLogin: string) => settingService.updateLogin(newLogin), {
    onSuccess({data}) {
      setUser(data.user)
      toast({
        title: `Success 😁`,
        description: "You've updated your login",
        status: "success",
        isClosable: true,
        duration: 4000,
      })
    }
  })

  const {mutateAsync: updatePicture} = useMutation("update picture", (newPicture: string) => settingService.updatePicture(newPicture), {
    onSuccess({data}) {
      setUser(data.user)
      toast({
        title: `Success 😁`,
        description: "You've updated your picture",
        status: "success",
        isClosable: true,
        duration: 4000,
      })
    }
  })

  return {
    deletePicture: globalService.hof(deletePicture),
    updateLogin: globalService.hof(updateLogin),
    updatePicture: globalService.hof(updatePicture)
  }
}

export default useSettings
