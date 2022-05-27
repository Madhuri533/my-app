import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValComComponent } from './custom-val-com.component';

describe('CustomValComComponent', () => {
  let component: CustomValComComponent;
  let fixture: ComponentFixture<CustomValComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomValComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
