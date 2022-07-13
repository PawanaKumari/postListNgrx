import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddPostComponent } from './add-post.component';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPostComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(true);
  });
  it('form invalid when empty', () => {
    // expect(component.postForm.Validators.minLength).toEqual(6);
    expect(component.postForm.control.hasError('titleInvalid', ['title'])).toBe(true);
  });
  it('title field validity',()=>{
    let title = component.postForm.controls['title']
    expect(title.valid).toBeFalsy();
  title.setValue("");
        expect(title.hasError('required')).toBeTruthy();

        title.setValue("A");
        expect(title.hasError('minLength', ['minlength'])).toBeFalsy();
  })
  it('test form group element', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#usernameInput');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.minLength).toEqual(6);
  });
  it('test form for the values', () => {
    const loginFormGroup = component.postForm;
    const loginFormValue = {
      title: 'hhhhhhhhhhhh',
      description: '',
    };
    expect(loginFormValue.title).toEqual('hhhhhhhhhhhh');
  });
});
