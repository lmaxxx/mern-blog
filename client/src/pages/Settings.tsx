import useUser from "../hooks/useUser";
import {useNavigate} from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import {useEffect} from "react";
import {Avatar, Center} from "@chakra-ui/react";
import SettingsForm from "../components/SettingsForm/SettingsForm";
import FileDnD from "../components/FileDnD/FileDnD";
import {useDropzone} from "react-dropzone";

const Settings = () => {
  const {isAuthenticated, user} = useUser()
  const navigate = useNavigate()
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone(
    {noKeyboard: true,
      noClick: true,
      accept: 'image/*',
      maxFiles: 1
    })

  useEffect(() => {
    if(!isAuthenticated) {
      navigate(-1)
    }
  }, [isAuthenticated])

  useEffect(() => {
    if(acceptedFiles.length > 0) {

    }
  }, [acceptedFiles])


  return (
    <div style={{height: "100vh"}}>
      <Navigation/>
      <div {...getRootProps()} style={{cursor: "default"}}>
        <Center position={"relative"} h={"calc(100vh - 70px)"} flexDirection={"column"}>
          <Avatar
            name={user?.login}
            src={user?.picture}
            size={"2xl"}
          />
          <SettingsForm/>
          <input {...getInputProps()}/>
          {
            isDragActive && <FileDnD/>
          }
        </Center>
      </div>
    </div>
  )
}

export default Settings
