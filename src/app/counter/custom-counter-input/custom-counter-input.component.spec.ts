import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CounterModule } from '../counter.module';

import { CustomCounterInputComponent } from './custom-counter-input.component';

describe('CustomCounterInputComponent', () => {
  let component: CustomCounterInputComponent;
  let fixture: ComponentFixture<CustomCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CounterModule,ReactiveFormsModule,FormsModule],
      declarations: [ CustomCounterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    fixture = TestBed.createComponent(CustomCounterInputComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('this is ngrx');
  });
  it('should click Send button with async', async(() => {
    let buttonElement = fixture.debugElement.query(By.css('.btn-primary'));
        spyOn(component, 'onAdd');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(component.onAdd).toHaveBeenCalled();
    });
  })); 
});
