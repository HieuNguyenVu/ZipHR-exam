import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbDropdownModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { FirstCharUpperModule } from 'src/app/shared/first-char-upper/first-char-upper.module';
import { NumWithZeroModule } from 'src/app/shared/num-with-zero/num-with-zero.module';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosRoutingModule } from './photos-routing.module';


@NgModule({
  declarations: [PhotoDetailComponent, PhotoListComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    FormsModule,
    NumWithZeroModule,
    SearchBarModule,
    FirstCharUpperModule,
    NgxGalleryModule,
  ],
})
export class PhotosModule {}
