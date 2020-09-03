import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunckfurnitureremovalComponent } from './junckfurnitureremoval.component';

describe('JunckfurnitureremovalComponent', () => {
  let component: JunckfurnitureremovalComponent;
  let fixture: ComponentFixture<JunckfurnitureremovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunckfurnitureremovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunckfurnitureremovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
