import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CarRentItem } from '../models/carRentItem';
import { CarRentItems } from '../models/carRentItems';

@Injectable({
  providedIn: 'root'
})
export class CarRentService {

  constructor() { }

  addRent(car:Car){
    let item=CarRentItems.find(c=>c.car.id===car.id);
    if(item){
       item.returnDate;Date.now()
    }
    else{
      let carRentItem=new CarRentItem();
      carRentItem.car=car;
      carRentItem.returnDate;Date.now()
      CarRentItems.push(carRentItem)
    }
  }

  list():CarRentItem[]{
    return CarRentItems;
  }
}
