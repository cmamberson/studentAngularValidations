import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentclassFormComponent } from './studentclass-form.component';

describe('StudentclassFormComponent', () => {
  let component: StudentclassFormComponent;
  let fixture: ComponentFixture<StudentclassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentclassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentclassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
