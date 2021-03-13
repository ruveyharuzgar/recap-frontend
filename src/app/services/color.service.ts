import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorListModel } from '../models/colorListModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44318/api/colors/getall';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorListModel> {
    return this.httpClient.get<ColorListModel>(this.apiUrl);
  }
}
