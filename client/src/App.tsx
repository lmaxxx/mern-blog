import {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {IUser, IUserContext} from "../types/auth.types";
import {useQuery} from "react-query";
import authService from './services/authService'

export const UserContext = createContext<IUserContext>({} as IUserContext)

function App() {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const {isLoading} = useQuery("get user", () => authService.getUser(), {
    onSuccess({data}) {
      if(data.isAuthenticated) {
        setIsAuthenticated(data.isAuthenticated)
        setUser(data.user)
      }
    }
  })

  const userContextValue: IUserContext = {
    user,
    isAuthenticated,
    setUser
  }

  console.log(userContextValue)

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        {/*<Route path={"/"} element={}/>*/}
        {/*<Route path={"/:id"} element={}/>*/}
        {/*<Route path={"/user"} element={}/>*/}
        {/*<Route path={"/admin"} element={}/>*/}
        {/*<Route path={"/admin/:id"} element={}/>*/}
      </Routes>
    </UserContext.Provider>
  )
}

export default App;
