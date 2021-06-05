import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/shared/services/houses.service';

@Component({
  selector: 'app-houses-detail',
  templateUrl: './houses-detail.component.html',
  styleUrls: ['./houses-detail.component.scss'],
})
export class HousesDetailComponent implements OnInit {
  house: any;
  constructor(
    private route: ActivatedRoute,
    private housesService: HousesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idHouse = params.get('idHouse');
      this.housesService
      .getHouse(idHouse)
      .subscribe((houseData) => {
        this.house = houseData;
      });
    });
  }
}
