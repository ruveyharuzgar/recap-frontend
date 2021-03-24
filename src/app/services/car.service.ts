import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44318/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails():Observable<ListResponseModel<CarDto>>
  {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailsById(carId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl +"cars/getcardetailsbyid?carId="+carId;

    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }
  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandName(brandName:string): Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getcardetailsbybrandname?name="+brandName

    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsByColorName(colorName: string): Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getcardetailsbycolorname?colorName="+colorName

    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getFilteredCarsId(brandId:number,colorId:number)
  {
    let newPath = this.apiUrl + "cars/getallcardetailsbyfiltersid?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getFilteredCarsName(brandName:string,colorName:string)
  {
    let newPath = this.apiUrl + "cars/getallcardetailsbyfiltername?brandName=" + brandName + "&colorName=" + colorName;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
