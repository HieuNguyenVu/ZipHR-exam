import { IObjectKeys } from "./object-keys.interface";

export interface IPost extends IObjectKeys {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostEdited extends Required<IPost> {
  index: number;
}
