import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFactsComponent } from './company-facts.component';

describe('CompanyFactsComponent', () => {
  let component: CompanyFactsComponent;
  let fixture: ComponentFixture<CompanyFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
