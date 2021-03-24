import { Component,Input, OnInit } from '@angular/core';
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
  rentalDtos:RentalDto[]=[];
  customerDtos:CustomerDto[]=[];

  customerId:number;
  rentdate:Date;
  returndate:Date;
  rental: Rental;

  dataLoaded=false;

  @Input() carRental:CarDto;
  constructor(private rentalService:RentalService,
    private customerService:CustomerService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.getRentalDetails();
    this.getAllCustomers();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    })
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDtos=response.data
      this.dataLoaded=true;
    })
  }

  getAllCustomers()
  {
    this.customerService.getCustomerDetails().subscribe(response => {
      this.customerDtos = response.data;
    });
  }

  addRent()
  {
    let rent:Rental=
    {
      carId:this.carRental.id,
      customerId:this.customerId,
      rentDate:this.rentdate,
      returnDate:this.returndate,
      price:this.carRental.dailyPrice
    };
    this.rental=rent;
    this.toastrService.success("Kiralama işleminiz gerçekleşmiştir")

  }
}
