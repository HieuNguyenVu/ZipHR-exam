import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', component: UserDetailComponent }]),
  ],
})
export class UsersModule {}
