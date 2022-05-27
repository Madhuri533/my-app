import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRouComponent } from './emp-rou.component';

describe('EmpRouComponent', () => {
  let component: EmpRouComponent;
  let fixture: ComponentFixture<EmpRouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpRouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
