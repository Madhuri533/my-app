import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperCompComponent } from './oper-comp.component';

describe('OperCompComponent', () => {
  let component: OperCompComponent;
  let fixture: ComponentFixture<OperCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
