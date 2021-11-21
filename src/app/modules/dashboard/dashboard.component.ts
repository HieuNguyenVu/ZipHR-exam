import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from 'ngx-gallery-9';
import { map, Observable } from 'rxjs';
import { IAlbum } from 'src/app/shared/models/album.model';
import { IPost } from 'src/app/shared/models/post.model';
import { AlbumsService } from '../albums/albums.service';
import { PhotosService } from '../photos/photos.service';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  postCount: number = 123;
  albumsCount: number = 12;
  photosCount: number = 1234;

  postList$: Observable<IPost[]>;
  photoList$: Observable<NgxGalleryImage[]>;
  albumList$: Observable<IAlbum[]>;

  constructor(
    private postService: PostsService,
    private photoService: PhotosService,
    private albumsService: AlbumsService
  ) {
    this.postList$ = postService.getPosts();
    this.photoList$ = photoService.getPhotos().pipe(
      map((photos) => {
        return photos.map((photo) => {
          return {
            small: photo.thumbnailUrl,
            medium: photo.url,
            big: photo.url,
          };
        });
      })
    );
    this.albumList$ = albumsService.getAlbums();

    this.galleryOptions = [
      {
        width: '100%',
        height: 'calc(100vh - 300px)',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsMargin: 10,
        lazyLoading: true,
        preview: true,
        imageArrowsAutoHide: true
      },
      {
        breakpoint: 400,
        preview: true,
      },
    ];

    this.galleryImages = [];
  }

  ngOnInit(): void {}
}
