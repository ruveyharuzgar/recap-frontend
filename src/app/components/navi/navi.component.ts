import { Component, OnInit } from '@angular/core';
import { LoginGuard } from 'src/app/guards/login.guard';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  fullName: string;
  userId: number;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.controlAuthentication() == true) {
      this.fullName == this.getFullName();
      this.getUser();
    }
  }
  controlAuthentication(): boolean {
    return this.authService.isAuthenticated();
  }

  getFullName() {
    return localStorage.getItem('fullName');
  }

  getUser(): number {
    this.userService.getUser().subscribe((response) => {
      response.data.forEach((user) => {
        if (user.email == this.getFullName()) {
          this.userId = user.id;
        }
      });
    });
    return this.userId;
  }

  logout() {
    this.authService.logout();
  }
}
