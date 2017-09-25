import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorclassFormComponent } from './majorclass-form.component';

describe('MajorclassFormComponent', () => {
  let component: MajorclassFormComponent;
  let fixture: ComponentFixture<MajorclassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorclassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorclassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
