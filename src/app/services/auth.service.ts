import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListModel } from '../models/listModel';
import { LoginModel } from '../models/loginModel';
import { ObjectResponseModel } from '../models/objectResponseModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44318/api/";

  constructor(
    private httpClient:HttpClient
  ) { }

  login(loginModel:LoginModel){
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
}
