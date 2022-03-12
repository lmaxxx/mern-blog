export interface IUser {
  login: string
  uid: number
  picture: string
}

export interface IUserContext {
  user: IUser
  setUser: (user: IUser) => void
  isAuthenticated: boolean
}

export interface IUserResponse {
  user: IUser
  isAuthenticated: boolean
}
