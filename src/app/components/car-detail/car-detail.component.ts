import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarRentService } from 'src/app/services/car-rent.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDto;
  carImages:CarImage[]=[];
  currentImage : CarImage;
  dataLoaded = false;
  carId:number;

  imageBasePath="https://localhost:44318/";
  defaultImg = "Images/default.jpg";
  
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private toastrService:ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarDetailsById(params["carId"]);
        this.getImagesByCarId(params["carId"]);
      }
    });
  }

  getCarDetailsById(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails= response.data;
      this.carId=response.data.id;
      this.dataLoaded = true;
    });
  }
  getImagesByCarId(carId:number){ 
    this.carImageService.getImagesByCarId(carId).subscribe((response)=>{
      this.carImages=response.data; 
      // this.currentImage=this.carImages[0]; 
    });
  }
  getImagePath(image:string)
  {
    let newPath = this.imageBasePath + image;
    return newPath; 
  }

  // getImagesByCarIdClass(carImage: CarImage) {

  //   if (this.currentImage == carImage) {
  //     return "carousel-item active";
  //   } else {
  //     return "carousel-item";
  //   }
  // }
 
}
