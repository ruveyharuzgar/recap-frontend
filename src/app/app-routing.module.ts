import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StartComponent } from './components/start/start.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '',component:NaviComponent ,
  children: [ 
    { path:'',component:CarComponent}
  ]
  },
  { path: 'dashboard',
   component: DashboardComponent,
   canActivate: [AdminGuard],
   children: [ 
   { path:'',component:StartComponent},
   { path:'users',component: UserComponent},
   { path:'rentals',component: RentalComponent },
   { path:'settings',component:SettingsComponent }
  ]}, 

  { path: 'cars',component: CarComponent },
  
  { path: 'userDetail',component: UserDetailComponent },


  { path: 'cars/start',component: StartComponent },

  { path: 'cars/brand/:brandId',component: CarComponent },
  
  { path: 'cars/color/:colorId',component: CarComponent },

  { path: 'brand/list', component: BrandListComponent },

  { path: 'color/list', component: ColorListComponent },

  { path: 'car/list', component: CarListComponent },

  { path: 'customers', component: CustomerComponent },

  { path: 'users', component: UserComponent },

  { path: 'cars/carDetail/:carId', component: CarDetailComponent},

  { path: 'cars/carDetail/:carId/rentals/add', component:RentalAddComponent,canActivate:[LoginGuard]},
  
  { path: 'rentals', component: RentalComponent },

  { path: 'payments', component: PaymentComponent },
  
  { path: 'car/list/cars/add', component: CarAddComponent,canActivate:[LoginGuard,AdminGuard] },

  { path: 'rentals/add', component: RentalAddComponent,canActivate:[LoginGuard,AdminGuard]},

  { path: 'color/list/colors/add', component: ColorAddComponent,canActivate:[LoginGuard,AdminGuard] },

  { path: 'brand/list/brands/add', component: BrandAddComponent,canActivate:[LoginGuard,AdminGuard]},

  { path: 'brand/list/brands/update', component: BrandUpdateComponent,canActivate:[LoginGuard,AdminGuard]},

  { path: 'color/list/colors/update', component: ColorUpdateComponent,canActivate:[LoginGuard,AdminGuard]},

  { path: 'car/list/cars/update', component: CarUpdateComponent,canActivate:[LoginGuard,AdminGuard]},

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
