import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallformComponent } from './smallform.component';

describe('SmallformComponent', () => {
  let component: SmallformComponent;
  let fixture: ComponentFixture<SmallformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
