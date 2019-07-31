import { Component, OnInit,OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import {Subscription} from 'rxjs';
import { PostsService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;

constructor(public postService: PostsService) { }

  ngOnInit() {
  this.posts = this.postService.getPosts();
  this.postsSub = this.postService.getPostsUpdatedlistener()
    .subscribe((posts: Post[] ) => { this.posts = posts;
    });

}
ngOnDestroy() {
  this.postsSub.unsubscribe();

}
}
