import classes from './NavigationBar.module.scss'
import useUser from "../../hooks/useUser";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";

const NavigationBar = () => {
  const {isAuthenticated} = useUser()

  return (
    <div className={classes.NavigationBar}>
      {isAuthenticated
        ? <UserBar/>
        : <AuthBar/>
      }
    </div>
  )
}

export default NavigationBar
