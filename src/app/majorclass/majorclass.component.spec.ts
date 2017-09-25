import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorclassComponent } from './majorclass.component';

describe('MajorclassComponent', () => {
  let component: MajorclassComponent;
  let fixture: ComponentFixture<MajorclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
