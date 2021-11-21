import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IPost } from 'src/app/shared/models/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post$: Observable<IPost>;
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {
    this.post$ = postService.getPost(route.snapshot.params['id']);
  }

  ngOnInit(): void {}
}
