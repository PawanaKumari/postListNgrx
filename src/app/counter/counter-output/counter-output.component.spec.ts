import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CounterModule } from '../counter.module';
import { CounterOutputComponent } from './counter-output.component';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let fixture: ComponentFixture<CounterOutputComponent>;
 
  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,CounterModule,RouterTestingModule],
      declarations: [CounterOutputComponent], 
    })
    fixture = TestBed.createComponent(CounterOutputComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("H1 tag should be Hello World", () => {
    var h1: HTMLElement = fixture.nativeElement.querySelector("h1");
    expect(h1.textContent).toEqual("Hello World");  
  })



});
