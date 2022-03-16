import useUser from "../hooks/useUser";
import {useNavigate} from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import {useEffect} from "react";
import {Avatar, Center, Button} from "@chakra-ui/react";

const Settings = () => {
  const {isAuthenticated, user} = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuthenticated) {
      navigate(-1)
    }
  }, [isAuthenticated])

  return (
    <div style={{height: "100vh"}}>
      <Navigation/>
      <Center h={"calc(100vh - 70px)"}>
        <Avatar
          name={user.login}
          src={user.picture}
          size={"2xl"}
        />
      </Center>
    </div>
  )
}

export default Settings
