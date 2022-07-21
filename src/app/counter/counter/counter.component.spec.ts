import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CounterModule } from '../counter.module';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports:[CounterModule,RouterTestingModule],
  //     declarations: [ CounterComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[CounterModule,RouterTestingModule],
      declarations: [ CounterComponent ]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it(`should have as title 'ngrxCounter'`, () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const module = TestBed.inject(CounterModule);
        expect(module).toBeTruthy();
  });
});
