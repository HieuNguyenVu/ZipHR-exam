import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get User Detail
   * @param userId number
   * @returns Observable<IUser>
   */
  getUserDetail(userId: number) {
    return this.httpClient.get<IUser>(
      [environment.BASE_URL, environment.USER_API, userId].join('/')
    );
  }
}
