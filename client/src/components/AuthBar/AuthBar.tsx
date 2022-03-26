import classes from './AuthBar.module.scss'
import { Icon, HStack, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import useAuth from "../../hooks/useAuth";

const AuthBar = () => {
  const {auth} = useAuth()

  return (
    <div className={classes.AuthBar}>
      <HStack>
        <Text>Log in with</Text>
        <Icon
          onClick={auth("google")}
          className={classes.AuthBarIcon}
          boxSize={"2rem"}
          as={FcGoogle}
        />
        <Icon
          onClick={auth("github")}
          className={classes.AuthBarIcon}
          boxSize={"2rem"}
          as={AiFillGithub}
        />
      </HStack>
    </div>
  )
}

export default AuthBar
