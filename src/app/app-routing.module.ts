import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

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

  { path: 'customers', component: CustomerComponent },

  { path: 'cars/carDetail/:carId', component: CarDetailComponent },

  { path: 'cars/rental', component: RentalComponent },

  { path: 'payment', component: PaymentComponent },
  
  { path: 'cars/add', component: CarAddComponent },

  { path: 'colors/add', component: ColorAddComponent },

  { path: 'brands/add', component: BrandAddComponent },

  { path: 'brands/update', component: BrandUpdateComponent },
  { path: 'colors/update', component: ColorUpdateComponent },
  { path: 'cars/update', component: CarUpdateComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
