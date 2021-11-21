import { IObjectKeys } from './object-keys.interface';
import { IPhoto } from './photo.model';

export interface IAlbum extends IObjectKeys {
  userId: number;
  id: number;
  title: string;
}
export interface IPhotoEdited extends IObjectKeys{
  id: number,
  title: string,
  small: string;
  medium: string;
  big: string;
}

export interface IAlbumEdited extends Required<IAlbum> {
  photos: IPhotoEdited[];
}
