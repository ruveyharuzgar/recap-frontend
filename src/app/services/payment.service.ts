import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListModel } from '../models/listModel';
import { Payment } from '../models/payment';
import { PaymentItems } from '../models/paymentItems';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = 'https://localhost:44318/api/';
  creditCardNumber: 'boş bırakılmaz';
  expirationDate: 'boş bırakılmaz';
  securityCode: 'boş bırakılmaz';
  constructor(private httpClient: HttpClient) {}

  addPayment(car: Car) {
    let item = PaymentItems.find((p) => p.car.carId === car.carId);
    let payment = new Payment();
    payment.car = car;
    payment.creditCardNumber = this.creditCardNumber;
    payment.expirationDate = this.expirationDate;
    payment.securityCode = this.securityCode;
    PaymentItems.push(payment);
  }

  list(): Payment[] {
    return PaymentItems;
  }
}
