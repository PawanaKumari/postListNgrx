import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../post-list/state/post.action';
import { getPostById } from '../post-list/state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: Post ;
  postForm!: FormGroup ;
  postSubscription!: Subscription ;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id, 'idddddddddd');
      this.postSubscription = this.store
        .select(getPostById,{id})
        .subscribe((data) => {
          console.log(data, 'ddddd');
          this.post = data;
          this.createForm();
        });
    });
    
    
  }
  createForm() {
    this.postForm = new FormGroup({
      id:new FormControl(null,[Validators.required]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }
    const id =this.postForm.value.id;
    const name = this.postForm.value.name;
    const email = this.postForm.value.email;
    const post: Post = {
      id: this.post.id,
      name,
      email,
    };

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }
  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
