import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReceptionistComponent } from './new-receptionist.component';

describe('NewReceptionistComponent', () => {
  let component: NewReceptionistComponent;
  let fixture: ComponentFixture<NewReceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
