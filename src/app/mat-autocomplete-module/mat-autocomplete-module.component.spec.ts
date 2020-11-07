import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocompleteModuleComponent } from './mat-autocomplete-module.component';

describe('MatAutocompleteModuleComponent', () => {
  let component: MatAutocompleteModuleComponent;
  let fixture: ComponentFixture<MatAutocompleteModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAutocompleteModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAutocompleteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
