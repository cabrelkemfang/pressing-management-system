import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanningMaterialComponent } from './cleanning-material.component';

describe('CleanningMaterialComponent', () => {
  let component: CleanningMaterialComponent;
  let fixture: ComponentFixture<CleanningMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanningMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanningMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
