import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddPostComponent } from './add-post.component';
import { DebugElement } from '@angular/core';
import { PostModule } from '../post.module';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPostComponent],
      imports: [FormsModule, ReactiveFormsModule,HttpClientTestingModule,PostModule],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AddPostComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

 
  it('form invalid when empty', () => {
    component.postForm.controls.title.setValue('');
    component.postForm.controls.description.setValue('');
    expect(component.postForm.valid).toBeFalsy();
  });

})

