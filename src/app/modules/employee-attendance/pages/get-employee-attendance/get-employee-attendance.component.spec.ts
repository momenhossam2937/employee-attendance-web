import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeAttendanceComponent } from './get-employee-attendance.component';

describe('GetEmployeeAttendanceComponent', () => {
  let component: GetEmployeeAttendanceComponent;
  let fixture: ComponentFixture<GetEmployeeAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmployeeAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
