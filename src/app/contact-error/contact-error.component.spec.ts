import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactErrorComponent } from './contact-error.component';

describe('ContactErrorComponent', () => {
  let component: ContactErrorComponent;
  let fixture: ComponentFixture<ContactErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
