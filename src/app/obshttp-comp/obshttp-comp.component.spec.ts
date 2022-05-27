import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObshttpCompComponent } from './obshttp-comp.component';

describe('ObshttpCompComponent', () => {
  let component: ObshttpCompComponent;
  let fixture: ComponentFixture<ObshttpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObshttpCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObshttpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
