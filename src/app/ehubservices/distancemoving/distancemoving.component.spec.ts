import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancemovingComponent } from './distancemoving.component';

describe('DistancemovingComponent', () => {
  let component: DistancemovingComponent;
  let fixture: ComponentFixture<DistancemovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistancemovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
