import { Component,Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  

  paymentItems:Payment[];


  constructor(
    private paymnetService:PaymentService
    )
     { }

  ngOnInit(): void {
    this.getPayment();
  }
  getPayment(){
    this.paymentItems=this.paymnetService.list();
  }
}
