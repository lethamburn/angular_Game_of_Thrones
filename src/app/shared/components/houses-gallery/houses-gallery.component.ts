import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-gallery',
  templateUrl: './houses-gallery.component.html',
  styleUrls: ['./houses-gallery.component.scss']
})
export class HousesGalleryComponent implements OnInit {

  constructor() { }

  @Input() itemList: any [] = [];
  @Input() houses: any [] = [];

  ngOnInit(): void {
  }

}
