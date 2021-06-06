import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologyGalleryComponent } from './chronology-gallery.component';

describe('ChronologyGalleryComponent', () => {
  let component: ChronologyGalleryComponent;
  let fixture: ComponentFixture<ChronologyGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronologyGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronologyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
