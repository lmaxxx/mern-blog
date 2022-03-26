import useUser from './useUser'
import authService from "../services/authService";
import {useQuery} from "react-query";
import {useToast} from "@chakra-ui/react";
import {AuthProvider} from "../types/auth.types";
import globalService from '../services/globalService'

const useAuth = () => {
  const {setIsAuthenticated, setUser} = useUser()
  const toast = useToast()

  const {refetch: logout} = useQuery("logout", () => authService.logout(), {
    onSuccess({data}) {
      setIsAuthenticated(data.isAuthenticated)
      setUser(data.user)
      toast({
        title: `Success 😁`,
        description: "You've logged out",
        status: "success",
        isClosable: true,
        duration: 4000,
      })
    },
    onError() {
      toast({
        title: `Oh 😢`,
        description: "Something went wrong when you've tried to log out",
        status: "error",
        isClosable: true,
        duration: 4000,
      })
    },
    enabled: false
  })

  return {
    logout: globalService.hof(logout),
    auth: (provider: AuthProvider) => authService.auth.bind(null, provider)
  }
}

export default useAuth
