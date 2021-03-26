import { Component,Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  creditCardNumber:string;
  expirationDate:string;
  securityCode:string;

  

  @Input() rentPayment:Rental;

  constructor(private rentalService:RentalService,
    private paymentService:PaymentService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
  }

  addPayment()
  {
    let rent:Rental=this.rentPayment;
    let payment:Payment=
    {
      creditCardNumber:this.creditCardNumber,
      expirationDate:this.expirationDate,
      securityCode:this.securityCode,
      customerId:this.rentPayment.customerId

    };
     this.paymentService.addPayment(payment).subscribe(response => {
      this.toastrService.success("Ödemeniz Tamamlanmıştır");
   });
   this.rentalService.addRental(rent).subscribe(response => {
    this.toastrService.success("Aracınız Kiralanmıştır");
 });
  }
}
