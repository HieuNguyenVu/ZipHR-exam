import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/models/common.service';
import { IPhoto } from 'src/app/shared/models/photo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotosService extends CommonService<IPhoto> {
  constructor(private http: HttpClient) {
    super();
    this.getPhotos().subscribe((data) => {
      this._state$.next(data);
      this.dataGetted = true;
    });
  }
  /**
   * Get all photo
   * @returns IPhoto[]
   */
  getPhotos() {
    if (this.dataGetted) return this.state$;
    return this.http.get<IPhoto[]>(
      [environment.BASE_URL, environment.PHOTO_API].join('/')
    );
  }
  /**
   * Get a photo from id
   * @param id photo id
   * @returns
   */
  getPhoto(id: number) {
    return this.http.get<IPhoto>(
      [environment.BASE_URL, environment.PHOTO_API, id].join('/')
    );
  }
}
