import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSecComponent } from './chart-sec.component';

describe('ChartSecComponent', () => {
  let component: ChartSecComponent;
  let fixture: ComponentFixture<ChartSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
