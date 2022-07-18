import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModule } from '../post.module';

import { EditPostComponent } from './edit-post.component';

describe('EditPostComponent', () => {
  let component: EditPostComponent;
  let fixture: ComponentFixture<EditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[PostModule,ReactiveFormsModule,FormsModule],
      declarations: [ EditPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
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
});
