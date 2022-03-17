import useUser from "../hooks/useUser";
import {useNavigate} from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import {useEffect} from "react";
import {Avatar, Center} from "@chakra-ui/react";
import SettingsForm from "../components/SettingsForm/SettingsForm";

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
      <Center h={"calc(100vh - 70px)"} flexDirection={"column"}>
        <Avatar
          name={user?.login}
          src={user?.picture}
          size={"2xl"}
        />
        <SettingsForm/>
      </Center>
    </div>
  )
}

export default Settings
