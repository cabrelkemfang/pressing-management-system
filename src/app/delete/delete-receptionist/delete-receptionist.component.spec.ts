import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReceptionistComponent } from './delete-receptionist.component';

describe('DeleteReceptionistComponent', () => {
  let component: DeleteReceptionistComponent;
  let fixture: ComponentFixture<DeleteReceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
