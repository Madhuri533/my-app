import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssgFormComponent } from './assg-form.component';

describe('AssgFormComponent', () => {
  let component: AssgFormComponent;
  let fixture: ComponentFixture<AssgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
