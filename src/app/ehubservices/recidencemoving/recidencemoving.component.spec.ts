import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecidencemovingComponent } from './recidencemoving.component';

describe('RecidencemovingComponent', () => {
  let component: RecidencemovingComponent;
  let fixture: ComponentFixture<RecidencemovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecidencemovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecidencemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
