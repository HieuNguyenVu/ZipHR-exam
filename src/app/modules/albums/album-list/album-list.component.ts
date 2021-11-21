import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions } from 'ngx-gallery-9';
import { from, Observable } from 'rxjs';
import { IAlbumEdited } from 'src/app/shared/models/album.model';
import { PagingAndSearchComponent } from 'src/app/shared/models/paging.component';
import { ISearchModel } from 'src/app/shared/models/search.model';
import { PhotosService } from '../../photos/photos.service';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent
  extends PagingAndSearchComponent<IAlbumEdited>
  implements OnInit
{
  galleryOptions: NgxGalleryOptions[] = [
    {
      image: false,
      height: '100px',
      width: '100%',
      thumbnailsMargin: 0,
      thumbnailsRemainingCount: true,
      lazyLoading: true,
      preview: false,
      imageArrowsAutoHide: true,
      thumbnailsColumns: 3,
    },
    { breakpoint: 500, width: '100%', thumbnailsColumns: 2 },
  ];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) {
    super();
    const searchParam = {
      search: '',
      category: 'userId',
      ...this.route.snapshot.queryParams,
    };
    this.configuration = {
      defaultValue: searchParam.search,
      defaultCategory: searchParam.category,
      categories: [
        { value: 'userId', label: 'User Id' },
        { value: 'id', label: 'Id' },
        { value: 'title', label: 'Title' },
      ],
    };
    this.albumService.state$.subscribe((data) => {
      this.sourceStock = data;
      console.log(data);
      this.collectionSize = this.sourceStock.length;
      this.lastSearchResult = [...this.sourceStock];
      this.onSearch();
    });
  }

  ngOnInit(): void {}
}
