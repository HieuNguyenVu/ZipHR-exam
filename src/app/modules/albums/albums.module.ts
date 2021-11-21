import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NumWithZeroModule } from 'src/app/shared/num-with-zero/num-with-zero.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';
import { FirstCharUpperModule } from 'src/app/shared/first-char-upper/first-char-upper.module';
import { NgxGalleryModule } from 'ngx-gallery-9';

@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    FormsModule,
    NumWithZeroModule,
    SearchBarModule,
    FirstCharUpperModule,
    NgxGalleryModule
  ],
})
export class AlbumsModule {}
