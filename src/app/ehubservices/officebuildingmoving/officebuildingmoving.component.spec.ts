import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficebuildingmovingComponent } from './officebuildingmoving.component';

describe('OfficebuildingmovingComponent', () => {
  let component: OfficebuildingmovingComponent;
  let fixture: ComponentFixture<OfficebuildingmovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficebuildingmovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficebuildingmovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
