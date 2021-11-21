import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/models/common.service';
import { IPost } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends CommonService<IPost> {
  constructor(private http: HttpClient) {
    super();
    this.getPosts().subscribe((data) => {
      this._state$.next(data);
      this.dataGetted = true;
    });
  }
  /**
   * Get all post
   * @returns IPost[]
   */
  getPosts() {
    if (this.dataGetted) return this.state$;
    return this.http.get<IPost[]>(
      [environment.BASE_URL, environment.POST_API].join('/')
    );
  }
  /**
   * Get a post from id
   * @param id post id
   * @returns
   */
  getPost(id: number) {
    return this.http.get<IPost>(
      [environment.BASE_URL, environment.POST_API, id].join('/')
    );
  }
}
