import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LOAD_POSTS_SUCCESS, UPDATE_POST_SUCCESS } from '../post-list/state/post.action';
import { PostEffects } from '../post-list/state/post.effect';
import { postsReducer } from '../post-list/state/post.reducer';
import { PostModule } from '../post.module';

import { EditPostComponent } from './edit-post.component';

describe('EditPostComponent', () => {
  let component: EditPostComponent;
  let fixture: ComponentFixture<EditPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[EditPostComponent],
      imports:[ReactiveFormsModule,FormsModule,PostModule,
       
      
      ],
    
    })
    fixture = TestBed.createComponent(EditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should post', () => {
    expect(component.post).toBeTruthy();
  });
  it('test form group element', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('postForm');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(2);
  });
});
