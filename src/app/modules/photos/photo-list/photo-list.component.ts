import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotoEdited } from 'src/app/shared/models/album.model';
import { PagingAndSearchComponent } from 'src/app/shared/models/paging.component';
import { IPhoto } from 'src/app/shared/models/photo.model';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent
  extends PagingAndSearchComponent<IPhoto>
  implements OnInit
{
  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
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
        { value: 'albumId', label: 'Album Id' },
        { value: 'id', label: 'Id' },
        { value: 'title', label: 'Title' },
      ],
    };
    this.photosService.getPhotos().subscribe((data) => {
      this.sourceStock = data;
      this.collectionSize = this.sourceStock.length;
      this.lastSearchResult = [...this.sourceStock];
      this.onSearch();
    });
  }

  ngOnInit(): void {}

  openImage(index: number) {}
}
