import { Component, OnInit } from '@angular/core';
import { ObjectResponseModel } from 'src/app/models/objectResponseModel';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[]=[];
  dataLoaded=false;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUser().subscribe(response=>{
      this.users=response.data;
      this.dataLoaded=true;
    })
  }
  
}
