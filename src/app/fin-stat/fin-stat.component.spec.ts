import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinStatComponent } from './fin-stat.component';

describe('FinStatComponent', () => {
  let component: FinStatComponent;
  let fixture: ComponentFixture<FinStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
