import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerListModel } from '../models/customerListModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44318/api/customers/getall';

  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<CustomerListModel>{
    return this.httpClient.get<CustomerListModel>(this.apiUrl);
  }
}
