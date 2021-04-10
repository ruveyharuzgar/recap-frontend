import { Component, OnInit } from '@angular/core';
import { LoginGuard } from 'src/app/guards/login.guard';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  login:LoginGuard;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
