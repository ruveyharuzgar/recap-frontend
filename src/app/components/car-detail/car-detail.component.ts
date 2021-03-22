import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car;
  carImages:CarImage[]=[];
  currentImage : CarImage;
  dataLoaded = false;
  imageBasePath="https://localhost:44318/";
  defaultImg = "Images/default.jpg"

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private imageService:CarImageService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetailsById(params["carId"]);
      }
      else{
        this.getImagesByCarId();
      }
    });
  }

  getCarDetailsById(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(response)
    });
  }
  getImagesByCarId(){ 
    this.imageService.getImagesByCarId(this.cars.carId).subscribe((response)=>{
      this.carImages=response.data;  
      console.log(response)
    });
  }
  getCurrentImageClass(image:CarImage){
    if(image==this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

  getButtonClass(image:CarImage){
    if(image==this.carImages[0]){
      return "active"
    } else {
      return ""
    }
  }
}
