import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User;
  login:LoginComponent;

  constructor() { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
  let userMail=this.user.email;
  let loginMail=this.login.loginForm.value({},userMail)
  if(userMail==loginMail){
    console.log(loginMail)
  }
  }
}
