import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<IUser>;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.user$ = userService.getUserDetail(route.snapshot.params['id']);
  }

  ngOnInit(): void {}
}
