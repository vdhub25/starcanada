import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteErrorComponent } from './quote-error.component';

describe('QuoteErrorComponent', () => {
  let component: QuoteErrorComponent;
  let fixture: ComponentFixture<QuoteErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
