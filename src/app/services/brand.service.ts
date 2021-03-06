import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListModel } from '../models/listModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44318/api/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"brands/getall";
     return this.httpClient.get<ListResponseModel<Brand>>(newPath);
 }
  add(brand:Brand):Observable<ListModel>{
    let newPath=this.apiUrl+"brands/add";
    return this.httpClient.post<ListModel>(newPath,brand);
  }
  update(brand:Brand):Observable<ListModel>{
    let newPath=this.apiUrl+"brands/update";
    return this.httpClient.post<ListModel>(newPath,brand);
  }
}
