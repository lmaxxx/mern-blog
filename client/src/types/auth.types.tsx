export interface IUser {
  login: string
  uid: number
  picture: string
  _id: string
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

export type AuthProvider = "google" | "github"
