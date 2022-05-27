import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSavedSearchComponent } from './un-saved-search.component';

describe('UnSavedSearchComponent', () => {
  let component: UnSavedSearchComponent;
  let fixture: ComponentFixture<UnSavedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnSavedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnSavedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
