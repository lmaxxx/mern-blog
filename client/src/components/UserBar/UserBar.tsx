import classes from './UserBar.module.scss'
import {Avatar, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import useUser from "../../hooks/useUser";

const UserBar = () => {
  const {user} = useUser()

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
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default UserBar
