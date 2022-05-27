import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNavigateComponent } from './about-navigate.component';

describe('AboutNavigateComponent', () => {
  let component: AboutNavigateComponent;
  let fixture: ComponentFixture<AboutNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNavigateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
