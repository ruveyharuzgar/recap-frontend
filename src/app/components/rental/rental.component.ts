import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  customers:Customer[]=[];
  
  rentDate:Date;
  returnDate:Date;

  rental: Rental;
  car:Car;
  customer:Customer;

  dataLoaded=false;

  @Input() carRental:Car;
  constructor(
    private rentalService:RentalService,
    private customerService:CustomerService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
     this.getRentalDetails();
    
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    })
  }
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    })
  }
  getCustomerDetails()
  {
    this.customerService.getCustomerDetails().subscribe(response => {
      this.customers = response.data;
    });
  }
 /* addRental()
  {
    this.rental=
    {
      id:this.rental.id,
      carId:this.car.carId,
      customerId:this.customer.id,
      modelName:this.car.modelName,
      rentDate:this.rental.rentDate,
      returnDate:this.rental.returnDate,
      customerFirstName:this.customer.firstName,
      customerLastName:this.customer.lastName,
      companyName:this.customer.companyName
    };
    if(this.rental.rentDate)
    {
      this.toastrService.success("Kiralama işleminiz gerçekleşmiştir")
    }
    this.toastrService.error("Aracı Kiralayamazsınız")
  }  */
}
