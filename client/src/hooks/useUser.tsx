import {useRef} from 'react'
import {UserContext} from "../App";

const useUser = () => {
  return useRef(UserContext)
}

export default useUser
