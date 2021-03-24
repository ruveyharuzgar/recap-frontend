import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from '../models/listModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = 'https://localhost:44318/api/';

  constructor(private httpClient:HttpClient) { }

  addPayment(payment:Payment):Observable<ListModel> {
    let newPath = this.apiUrl + "payments/add";
    return this.httpClient.post<ListModel>(newPath,payment);
  }
}
