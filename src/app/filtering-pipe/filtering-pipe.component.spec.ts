import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringPipeComponent } from './filtering-pipe.component';

describe('FilteringPipeComponent', () => {
  let component: FilteringPipeComponent;
  let fixture: ComponentFixture<FilteringPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
