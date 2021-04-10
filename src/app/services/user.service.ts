import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from '../models/listModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';
import { OperationClaim } from '../models/operationClaim';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44318/api/';

  constructor(private httpClient:HttpClient) { }
  
  getUser():Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl+"users/getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getUserClaims(userId:User):Observable<ObjectResponseModel<OperationClaim>>{
    let newPath = this.apiUrl+"users/getclaims"
    return this.httpClient.get<ObjectResponseModel<OperationClaim>>(newPath);
  }
  add(user:User):Observable<ListModel>
  {
    let newPath = this.apiUrl+ "users/add";
    return this.httpClient.post<ListModel>(newPath,user);
  }
  
}
