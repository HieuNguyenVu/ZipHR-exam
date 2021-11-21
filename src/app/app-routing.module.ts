import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./modules/albums/albums.module').then((m) => m.AlbumsModule),
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./modules/photos/photos.module').then((m) => m.PhotosModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
