import {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {IUser, IUserContext} from "./types/auth.types";
import {useQuery} from "react-query";
import authService from './services/authService'
import Main from './pages/Main'
import {Center, useToast} from "@chakra-ui/react";
import { CircularProgress } from '@chakra-ui/react'
import Settings from "./pages/Settings";

export const UserContext = createContext<IUserContext>({} as IUserContext)

function App() {
  const toast = useToast()
  const [user, setUser] = useState<IUser>({} as IUser)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const {isLoading} = useQuery("get user", () => authService.getUser(), {
    onSuccess({data}) {
      if(data.isAuthenticated) {
        if(!isAuthenticated) {
          toast({
            title: `Success 😁`,
            description: "You've logged in",
            status: "success",
            isClosable: true,
            duration: 5000,
          })
        }
        setIsAuthenticated(data.isAuthenticated)
        setUser(data.user)
      }
    }
  })

  const userContextValue: IUserContext = {
    user,
    isAuthenticated,
    setIsAuthenticated,
    setUser,
  }

  if(isLoading) {
    return (
      <Center width={"100%"} height={"100vh"}>
        <CircularProgress isIndeterminate/>
      </Center>
    )
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/settings"} element={<Settings/>}/>
        {/*<Route path={"/:id"} element={<Main/>}/>*/}
        {/*<Route path={"/user"} element={}/>*/}
        {/*<Route path={"/admin"} element={}/>*/}
        {/*<Route path={"/admin/:id"} element={}/>*/}
      </Routes>
    </UserContext.Provider>
  )
}

export default App;
