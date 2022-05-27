import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRouComponent } from './students-rou.component';

describe('StudentsRouComponent', () => {
  let component: StudentsRouComponent;
  let fixture: ComponentFixture<StudentsRouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsRouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
