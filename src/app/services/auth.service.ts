import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from '../models/listModel';
import { LoginModel } from '../models/loginModel';
import { ObjectResponseModel } from '../models/objectResponseModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44318/api/";

  constructor(
    private httpClient:HttpClient,
    private localStroge:LocalStorageService
  ) { }

  login(loginModel:LoginModel):Observable<ObjectResponseModel<TokenModel>>{
    this.setUserName(loginModel.email);
    let newPath=this.apiUrl+"auth/login";
    return this.httpClient.post<ObjectResponseModel<TokenModel>>(newPath,loginModel);
  }

  register(registerModel:RegisterModel){
    let newPath=this.apiUrl+"auth/register";
    return this.httpClient.post<ObjectResponseModel<TokenModel>>(newPath,registerModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
  }
  setUserName(fullName: string) {
    localStorage.setItem('fullName', fullName);
  }

  getEmail() {
    return localStorage.getItem('fullName');
  } 
  isAdmin(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
}
}
