import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalmoversComponent } from './localmovers.component';

describe('LocalmoversComponent', () => {
  let component: LocalmoversComponent;
  let fixture: ComponentFixture<LocalmoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalmoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalmoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
