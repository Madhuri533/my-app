import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNgComponent } from './content-ng.component';

describe('ContentNgComponent', () => {
  let component: ContentNgComponent;
  let fixture: ComponentFixture<ContentNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
