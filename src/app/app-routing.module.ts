import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
