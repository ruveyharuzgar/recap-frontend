import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListModel } from '../models/listModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44318/api/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl+"colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  add(color:Color):Observable<ListModel>{
    let newPath=this.apiUrl+"colors/add";
    return this.httpClient.post<ListModel>(newPath,color);
  }
  update(color:Color):Observable<ListModel>{
    let newPath=this.apiUrl+"colors/update";
    return this.httpClient.post<ListModel>(newPath,color);
  }
}
