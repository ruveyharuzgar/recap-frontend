import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: CarComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarComponent,
  },
  
  {
    path: 'cars/color/:colorId',
    component: CarComponent,
  },

  { path: 'brand/list', component: BrandListComponent },

  { path: 'color/list', component: ColorListComponent },

  { path: 'car/list', component: CarListComponent },

  { path: 'customers', component: CustomerComponent },

  { path: 'cars/carDetail/:carId', component: CarDetailComponent},

  { path: 'cars/carDetail/:carId/rentals/add', component:RentalAddComponent},
  
  { path: 'rentals', component: RentalComponent },

  { path: 'payments', component: PaymentComponent },
  
  { path: 'car/list/cars/add', component: CarAddComponent,canActivate:[LoginGuard] },

  { path: 'rentals/add', component: RentalAddComponent,canActivate:[LoginGuard]},

  { path: 'color/list/colors/add', component: ColorAddComponent,canActivate:[LoginGuard] },

  { path: 'brand/list/brands/add', component: BrandAddComponent,canActivate:[LoginGuard]},

  { path: 'brand/list/brands/update', component: BrandUpdateComponent,canActivate:[LoginGuard]},

  { path: 'color/list/colors/update', component: ColorUpdateComponent,canActivate:[LoginGuard]},

  { path: 'car/list/cars/update', component: CarUpdateComponent,canActivate:[LoginGuard]},

  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
