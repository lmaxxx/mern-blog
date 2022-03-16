import classes from './UserBar.module.scss'
import {Avatar, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import {Link} from "react-router-dom";

const UserBar = () => {
  const {user} = useUser()
  const {logout} = useAuth()

  return (
    <div className={classes.UserBar}>
      <Menu>
        <MenuButton>
          <Avatar
            name={user.login}
            src={user.picture}
          />
        </MenuButton>
        <MenuList>
          <MenuItem>{user.login}</MenuItem>
          <MenuItem>My posts</MenuItem>
          <Link to={"/settings"}>
            <MenuItem>
                Settings
            </MenuItem>
          </Link>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default UserBar
