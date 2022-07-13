import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterOutputComponent } from './counter-output.component';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let fixture: ComponentFixture<CounterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterOutputComponent], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('div with class name',()=>{
    const el = fixture.debugElement.query(By.css('div.board'))
    expect(el).toBeTruthy()
  })

  it('should have Yes in "Yes Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    expect(btn.innerHTML).toBe('Yes');
  });
  it('should have a title', () => {
    expect(component.title).toBe('NOTICE BOARD');
    // we are accessing "h1"
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('NOTICE BOARD');
  });
  it('H1 tag should be Hello World', () => {
    var h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual('Hello World');
  });
});
