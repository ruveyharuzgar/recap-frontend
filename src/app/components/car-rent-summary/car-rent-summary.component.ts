import { Component, OnInit } from '@angular/core';
import { CarRentItem } from 'src/app/models/carRentItem';
import { Rental } from 'src/app/models/rental';
import { CarRentService } from 'src/app/services/car-rent.service';

@Component({
  selector: 'app-car-rent-summary',
  templateUrl: './car-rent-summary.component.html',
  styleUrls: ['./car-rent-summary.component.css']
})
export class CarRentSummaryComponent implements OnInit {

  carRentItems:CarRentItem[]=[];
  returnDate:Rental[]=[];
  constructor(private carRentService:CarRentService) { }

  ngOnInit(): void {
    this.getcarRent();
  }

  getcarRent()
  {
    this.carRentItems=this.carRentService.list();
  }
}
