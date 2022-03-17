import classes from './SettingsForm.module.scss'
import {Input, Button} from '@chakra-ui/react'
import {ChangeEvent, useState} from 'react'
import useUser from "../../hooks/useUser";
import useSettings from "../../hooks/useSettings";

const SettingsForm = () => {
  const {user} = useUser()
  const [newLogin, setNewLogin] = useState<string>(user.login)
  const {deletePicture} = useSettings()

  const setLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLogin(e.target.value)
  }

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
      >Update login</Button>
      <Button
        w={"100%"}
        mt={".5rem"}
        colorScheme={"blue"}
      >Upload picture</Button>
      <Button
        w={"100%"}
        mt={".5rem"}
        onClick={deletePicture}
        colorScheme={"red"}
      >Delete picture</Button>
    </div>
  )
}

export default SettingsForm
