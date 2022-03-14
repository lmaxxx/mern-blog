import classes from './AuthBar.module.scss'
import { Icon, HStack, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'

const AuthBar = () => {
  return (
    <div className={classes.AuthBar}>
      <HStack>
        <Text>Log in with</Text>
        <Icon className={classes.AuthBarIcon} boxSize={"2rem"} as={FcGoogle} />
        <Icon className={classes.AuthBarIcon} boxSize={"2rem"} as={AiFillGithub} />
      </HStack>
    </div>
  )
}

export default AuthBar
