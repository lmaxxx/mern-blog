import useUser from './useUser'
import authService from "../services/authService";
import {useQuery} from "react-query";
import {toast, useToast} from "@chakra-ui/react";

const useAuth = () => {
  const {setIsAuthenticated, setUser} = useUser()
  const toast = useToast()

  const {refetch} = useQuery("logout", () => authService.logout(), {
    onSuccess({data}) {
      setIsAuthenticated(data.isAuthenticated)
      setUser(data.user)
      toast({
        title: `Success 😁`,
        description: "You've logged out",
        status: "success",
        isClosable: true,
        duration: 5000,
      })
    },
    onError() {
      toast({
        title: `Oh 😢`,
        description: "Something went wrong when you've tried to log out",
        status: "error",
        isClosable: true,
        duration: 5000,
      })
    },
    enabled: false
  })

  return {logout: refetch}
}

export default useAuth
