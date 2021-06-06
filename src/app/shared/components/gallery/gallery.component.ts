import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor() { }
  textfilter: any;
  @Input() itemList: any[] = [];
  @Input() characters: any[] = [];
  options = { 
    autoHide: false, 
    scrollbarMinSize: 100,
  };

  ngOnInit(): void { }
}
