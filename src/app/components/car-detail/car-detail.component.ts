import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

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
  // currentCar?:Car;
  
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     
        this.getCarDetailsById(params["carId"]);
        this.getImagesByCarId(params["carId"]);
      
    });
  }

  getCarDetailsById(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.cars= response.data;
      this.dataLoaded = true;
    });
  }
  getImagesByCarId(carId:number){ 
    this.carImageService.getImagesByCarId(carId).subscribe((response)=>{
      this.carImages=response.data; 
      this.currentImage=this.carImages[0]; 
    });
  }

  getImagesByCarIdClass(carImage: CarImage) {

    if (this.currentImage == carImage) {
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}
