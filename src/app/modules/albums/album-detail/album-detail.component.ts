import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation } from 'ngx-gallery-9';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAlbumEdited, IPhotoEdited } from 'src/app/shared/models/album.model';
import { PagingAndSearchComponent } from 'src/app/shared/models/paging.component';
import {
  ISearchConfiguration,
  ISearchModel,
} from 'src/app/shared/models/search.model';
import { environment } from 'src/environments/environment';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
})
export class AlbumDetailComponent
  extends PagingAndSearchComponent<IPhotoEdited>
  implements OnInit
{
  galleryOptions = [
    {
      width: '100%',
      height: 'calc(100vh - 300px)',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      thumbnailsMargin: 30,
      lazyLoading: true,
      preview: true,
      imageArrowsAutoHide: true,
    },
    {
      breakpoint: 400,
      preview: true,
    },
  ];

  stockData: any; // IAlbumEdited | undefined

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) {
    super();
    const searchParam = {
      search: '',
      category: 'title',
      ...this.route.snapshot.queryParams,
    };
    console.log(searchParam);
    this.configuration = {
      defaultValue: searchParam.search,
      defaultCategory: searchParam.category,
      categories: [
        { value: 'id', label: 'Id' },
        { value: 'title', label: 'Title' },
      ],
    };
    const id = this.route.snapshot.params['id'];
    this.albumService.getAlbumWithPhotos(id).subscribe((data) => {
      if (data) {
        this.stockData = data;
        this.sourceStock = this.stockData.photos;
        this.lastSearchResult = this.stockData.photos;
        this.onSearch();
      }
    });
  }

  ngOnInit(): void {}
  
  openImage(index: number) {
    console.log(index);
  }
}
