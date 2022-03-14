export interface IUser {
  login: string
  uid: number
  picture: string
}

export interface IUserContext {
  user: IUser
  setUser: (user: IUser) => void
  isAuthenticated: boolean
  setIsAuthenticated: (status: boolean) => void
}

export interface IUserResponse {
  user: IUser
  isAuthenticated: boolean
}
