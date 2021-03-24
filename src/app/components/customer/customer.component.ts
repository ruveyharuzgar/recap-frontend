import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerDto } from 'src/app/models/customerDto';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  customerDtos:CustomerDto[]=[];
  dataLoaded=false;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data;
      this.dataLoaded=true;
    })
  }

  getCustomerDetails()
  {
    this.customerService.getCustomerDetails().subscribe(response => {
      this.customerDtos = response.data;
    });
  }
}
