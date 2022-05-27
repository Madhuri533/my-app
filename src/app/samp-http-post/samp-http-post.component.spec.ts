import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampHttpPostComponent } from './samp-http-post.component';

describe('SampHttpPostComponent', () => {
  let component: SampHttpPostComponent;
  let fixture: ComponentFixture<SampHttpPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampHttpPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampHttpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
