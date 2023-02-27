import { BikeService } from './../service/bike.service';
import { Component, OnInit } from '@angular/core';
import { Bike } from '../model/bike';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  bikes: Bike[];

  constructor(private bikeService: BikeService) { }

  ngOnInit(){
    this.bikeService.findAll().subscribe(data => {
      this.bikes = data;
    })
  }

}
