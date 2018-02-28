import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReceptionistComponent } from './update-receptionist.component';

describe('UpdateReceptionistComponent', () => {
  let component: UpdateReceptionistComponent;
  let fixture: ComponentFixture<UpdateReceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
