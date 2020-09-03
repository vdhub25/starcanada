import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianomovingComponent } from './pianomoving.component';

describe('PianomovingComponent', () => {
  let component: PianomovingComponent;
  let fixture: ComponentFixture<PianomovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianomovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianomovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
