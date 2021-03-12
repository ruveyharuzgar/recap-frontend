import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandListModel } from '../models/brandListModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44318/api/brands/getall";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandListModel>{
     return this.httpClient
     .get<BrandListModel>(this.apiUrl);
 }
}
