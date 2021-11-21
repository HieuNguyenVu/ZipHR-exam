import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PagingAndSearchComponent } from 'src/app/shared/models/paging.component';
import { IPostEdited } from 'src/app/shared/models/post.model';
import {
  ISearchConfiguration,
  ISearchModel,
} from 'src/app/shared/models/search.model';
import { environment } from 'src/environments/environment';
import { PostsService } from '../posts.service';
import { compare, NgbdSortableHeader, SortEvent } from './sort.directive';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent
  extends PagingAndSearchComponent<IPostEdited>
  implements OnInit
{
  //sort
  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(
    private postService: PostsService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    super();
    const searchParam = {
      search: '',
      category: 'userId',
      ...route.snapshot.queryParams,
    };
    this.configuration = {
      defaultValue: searchParam.search,
      defaultCategory: searchParam.category,
      categories: [
        { value: 'userId', label: 'User Id' },
        { value: 'id', label: 'Post Id' },
        { value: 'title', label: 'Post Title' },
        { value: 'body', label: 'Post Content' },
      ],
    };
    this.postService.getPosts().subscribe((posts) => {
      this.sourceStock = posts.map((value, index) => {
        return { index: index + 1, ...value };
      });
      this.collectionSize = this.sourceStock.length;
      this.lastSearchResult = [...this.sourceStock];
      this.onSearch({
        value: searchParam.search,
        category: searchParam.category,
      });
    });
  }
  /**
   * on Click Sort
   * @param sortModel SortEvent
   */
  onSort(sortModel: any) {
    console.log(sortModel);
    const { column, direction } = sortModel as SortEvent;
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.lastSearchResult = this.lastSearchResult;
    } else {
      this.lastSearchResult = [...this.lastSearchResult].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
    // this.refreshPosts();
    this.refreshAlbums();
  }

  ngOnInit(): void {
    
  }
}
