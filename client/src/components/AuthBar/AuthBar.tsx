import classes from './AuthBar.module.scss'
import { Icon, HStack, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import useAuth from "../../hooks/useAuth";

const AuthBar = () => {
  const {auth: authWithGoogle} = useAuth("google")
  const {auth: authWithGithub} = useAuth("github")

  return (
    <div className={classes.AuthBar}>
      <HStack>
        <Text>Log in with</Text>
        <Icon
          onClick={authWithGoogle}
          className={classes.AuthBarIcon}
          boxSize={"2rem"}
          as={FcGoogle}
        />
        <Icon
          onClick={authWithGithub}
          className={classes.AuthBarIcon}
          boxSize={"2rem"}
          as={AiFillGithub}
        />
      </HStack>
    </div>
  )
}

export default AuthBar
