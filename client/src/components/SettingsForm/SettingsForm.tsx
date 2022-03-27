import classes from './SettingsForm.module.scss'
import {Input, Button, Progress} from '@chakra-ui/react'
import {ChangeEvent, useEffect, useState} from 'react'
import useUser from "../../hooks/useUser";
import useSettings from "../../hooks/useSettings";
import settingService from "../../services/settingService";
import useUpload from "../../hooks/useUpload";

const SettingsForm = () => {
  const {user} = useUser()
  const [newLogin, setNewLogin] = useState<string>(user?.login)
  const {deletePicture, updateLogin, updatePicture} = useSettings()
  const {data: file, upload, uploadProgess, isUploading} = useUpload()

  const setLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLogin(e.target.value)
  }

  const uploadHoF = (e: any) => {
    const file = e.target.files[0]
    upload(file)
  }

  useEffect(() => {
    if(file) {
      updatePicture(file)
    }
  }, [file])

  return (
    <div className={classes.SettingsForm}>
      <Input
        w={"100%"}
        value={newLogin}
        onChange={setLogin}
        placeholder={"New login"}
      />
      <Button
        w={"100%"}
        mt={".5rem"}
        onClick={updateLogin.bind(this, newLogin)}
        disabled={settingService.validateLogin(newLogin, user?.login)}
      >Update login</Button>
      <input
        name={"picture"}
        onChange={uploadHoF}
        id={"file"}
        accept={"image/*"}
        type="file"
        hidden/>
      <label htmlFor={"file"}>
          <Button
            as={"div"}
            w={"100%"}
            mt={".5rem"}
            colorScheme={"blue"}
          >Upload picture</Button>
      </label>
      <Button
        w={"100%"}
        mt={".5rem"}
        onClick={deletePicture}
        colorScheme={"red"}
        disabled={settingService.validatePicture(user?.picture)}
      >Delete picture</Button>
      {isUploading && <Progress isAnimated hasStripe value={uploadProgess} mt={3} w={"300px"}/>}
    </div>
  )
}

export default SettingsForm
