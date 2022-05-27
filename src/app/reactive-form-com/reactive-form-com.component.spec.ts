import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComComponent } from './reactive-form-com.component';

describe('ReactiveFormComComponent', () => {
  let component: ReactiveFormComComponent;
  let fixture: ComponentFixture<ReactiveFormComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
