import {IUser} from './auth.types'

export interface IPost {
  _id: string
  title: string
  picture: string
  creator: IUser
  creationDate: number
  lastUpdated: number
  comments: []
  template: {
    main: []
    leftSidebar: []
    rightSidebar: []
  }
}
