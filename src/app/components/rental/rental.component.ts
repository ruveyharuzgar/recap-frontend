import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { CustomerDto } from 'src/app/models/customerDto';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  rentalDetails:RentalDto[]=[];
  customerDetails:CustomerDto[]=[];

  
  rentDate:Date;
  returnDate:Date;

  rental: Rental;
  customer:CustomerDto;
  car:Car;

  dataLoaded=false;

  @Input() carRental:CarDto;
  constructor(
    private rentalService:RentalService,
    private customerService:CustomerService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getRentalDetails();
    this.getCustomerDetails();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    })
  }
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDetails=response.data
      this.dataLoaded=true;
    })
  }
  getCustomerDetails()
  {
    this.customerService.getCustomerDetails().subscribe(response => {
      this.customerDetails = response.data;
    });
  }

  addRental()
  {
    this.rental=
    {
      carId:this.car.id,
      customerId:this.customer.id,
      rentDate:this.rentDate,
      returnDate:this.returnDate
    };
    if(this.rental.rentDate)
    {
      this.toastrService.success("Kiralama işleminiz gerçekleşmiştir")
    }
    this.toastrService.error("Aracı Kiralayamazsınız")
  }
}
