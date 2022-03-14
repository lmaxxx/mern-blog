import classes from './Navigation.module.scss'
import Logo from '../../asset/logoWithName.png'
import { Image } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";


const Navigation = () => {
  const navigate = useNavigate()

  const goToHomepage = () => {
    navigate("/")
  }

  return (
    <nav className={classes.Navigation}>
      <Image onClick={goToHomepage} className={classes.NavigationLogo} src={Logo} alt={""}/>
      <NavigationBar/>
    </nav>
  )
}

export default Navigation
