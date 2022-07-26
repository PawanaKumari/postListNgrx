import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { addPost } from '../post-list/state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
postForm:FormGroup|any
  constructor(private router:Router,  private formBuilder: FormBuilder ,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      id: new FormControl(null,[Validators.required]),
      name: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      email: new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })
  }

  get f() {
    return this.postForm.controls;
  }

//   showDescriptionError(){
//     const descriptionForm =this.postForm.get('description');
//     if(descriptionForm.touched && !descriptionForm.valid){
//       if(descriptionForm?.errors.required){
// return 'Description is reqired'
//       }
//     }
//   }
  onAddPost(){
  if(!this.postForm.valid){
    return;
  }
  const post:Post = {
    id:this.postForm.value.id,
    name:this.postForm.value.name,
    email:this.postForm.value.email,
  }
  this.store.dispatch(setLoadingSpinner({status:true}))
  this.store.dispatch(addPost({post}))
  this.router.navigate(['posts'])
  }

}
