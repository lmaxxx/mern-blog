import useUser from "./useUser";
import {useQuery} from "react-query";
import settingService from "../services/settingService";
import globalService from "../services/globalService";
import {useToast} from "@chakra-ui/react";

interface paramsType {
  newLogin?: string
}

const useSettings = ({newLogin}: paramsType) => {
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

  const {refetch: updateLogin} = useQuery(["update login", newLogin], () => settingService.updateLogin(newLogin!), {
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

  const updatePicture = async (newPicture: string) => {
    const {data} = await settingService.updatePicture(newPicture)
    setUser(data.user)
    toast({
      title: `Success 😁`,
      description: "You've updated your picture",
      status: "success",
      isClosable: true,
      duration: 4000,
    })
  }

  return {
    deletePicture: globalService.hof(deletePicture),
    updateLogin: globalService.hof(updateLogin),
    updatePicture
  }
}

export default useSettings
