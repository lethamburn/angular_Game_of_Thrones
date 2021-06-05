import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesGalleryComponent } from './houses-gallery.component';

describe('HousesGalleryComponent', () => {
  let component: HousesGalleryComponent;
  let fixture: ComponentFixture<HousesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
