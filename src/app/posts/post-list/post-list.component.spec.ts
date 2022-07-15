import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(PostListComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test sum', () => {
    expect(component).toBeTruthy();
  });
});
