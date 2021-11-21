import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumWithZeroModule } from 'src/app/shared/num-with-zero/num-with-zero.module';
import { NgbdSortableHeader } from './post-list/sort.directive';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';
import { FirstCharUpperModule } from 'src/app/shared/first-char-upper/first-char-upper.module';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    PostComponent,
    NgbdSortableHeader,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NumWithZeroModule,
    SearchBarModule,
    FirstCharUpperModule,
  ],
  bootstrap: [PostListComponent],
})
export class PostsModule {}
