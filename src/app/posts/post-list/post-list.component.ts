import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { deletePost, deletePostSuccess, loadPosts } from './state/post.action';
import { getPosts } from './state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
    this.store.dispatch(loadPosts())

  }
  onDeletePost(id:string) {
    if (confirm('Are you sure want to delete')) {
      console.log(id,'delete the post');
      this.store.dispatch(deletePost({id}));
    }
  }

 
}
