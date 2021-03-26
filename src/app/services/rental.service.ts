import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from '../models/listModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44318/api/';
  

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalDetails():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(rental:Rental):Observable<ListModel>
  {
    let newPath = this.apiUrl+ "rentals/add";
    return this.httpClient.post<ListModel>(newPath,rental);
  }

}
