import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, map, Observable } from 'rxjs';
import { IAlbum, IAlbumEdited } from 'src/app/shared/models/album.model';
import { CommonService } from 'src/app/shared/models/common.service';
import { environment } from 'src/environments/environment';
import { PhotosService } from '../photos/photos.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService extends CommonService<IAlbumEdited> {
  constructor(private http: HttpClient, private photosService: PhotosService) {
    super();
    const photos$ = this.photosService.getPhotos();
    const albums$ = this.getAlbums();
    console.log('AlbumsService out  ');

    combineLatest([photos$, albums$]).subscribe((data) => {
      const albums = data[1];
      const photos = data[0];
      console.log('AlbumsService', data);
      const stockData = albums.map((album, index) => {
        const mPhotos = {
          photos: photos
            .filter((photo) => photo.albumId === album.id)
            .map((photos) => {
              return {
                id: photos.id,
                title: photos.title,
                small: photos.thumbnailUrl,
                medium: photos.url,
                big: photos.url,
              };
            }),
        };
        const out = { ...album, ...mPhotos };
        return out;
      });
      this._state$.next(stockData);
      this.dataGetted = true;
    },err =>{
      console.log(err);
    });
  }

  /**
   * Get all album
   * @returns IAlbum[]
   */
  getAlbums() {
    if (this.dataGetted) return this.state$;
    return this.http.get<IAlbumEdited[]>(
      [environment.BASE_URL, environment.ALBUM_API].join('/')
    );
  }
  /**
   * Get a album from id
   * @param id album id
   * @returns
   */
  getAlbum(id: number) {
    return this.http.get<IAlbumEdited>(
      [environment.BASE_URL, environment.ALBUM_API, id].join('/')
    );
  }

  /**
   * Get a album from id
   * @param id album id
   * @returns
   */
  getAlbumWithPhotos(id: number) {
    return this.state$.pipe(
      map((album) => {
        const found = album.find((ab) => {
          return ab.id == id ? true : false;
        });
        return found;
      })
    );
  }
}
