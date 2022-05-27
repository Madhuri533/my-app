import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchldconcComponent } from './viewchldconc.component';

describe('ViewchldconcComponent', () => {
  let component: ViewchldconcComponent;
  let fixture: ComponentFixture<ViewchldconcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchldconcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchldconcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
