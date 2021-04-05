import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListModel } from '../models/listModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44318/api/';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsById(carId: number): Observable<ObjectResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?carId=' + carId;

    return this.httpClient.get<ObjectResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?brandId=' + brandId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?colorId=' + colorId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getAllCarDetailsByFiltersId(brandId: number, colorId: number) {
    let newPath =
      this.apiUrl +
      'cars/getallcardetailsbyfiltersid?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getAllCarDetailsbyFilterName(brandName: string, colorName: string) {
    let newPath =
      this.apiUrl +
      'cars/getallcardetailsbyfiltername?brandName=' +
      brandName +
      '&colorName=' +
      colorName;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(car:Car):Observable<ListModel>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<ListModel>(newPath,car);
  }
  update(car:Car):Observable<ListModel>{
    let newPath=this.apiUrl+"cars/update";
    return this.httpClient.post<ListModel>(newPath,car);
  }
}
