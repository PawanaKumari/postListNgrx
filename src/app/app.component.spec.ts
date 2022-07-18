import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [    
        RouterTestingModule    
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrxCounter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngrxCounter');
  });
  it(`should have as variable name`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('pawana');
  });

    it("H1 tag should be Hello World", () => {
      const fixture = TestBed.createComponent(AppComponent);
    var h1: HTMLElement = fixture.nativeElement.querySelector("h1");
    expect(h1.textContent).toEqual("Hello World");  
  })


});
