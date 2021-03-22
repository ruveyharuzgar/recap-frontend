import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImage[]=[];
  currentCarImage:CarImage;
  imageBasePath="https://localhost:44318/";
  defaultImg = "Images/default.jpg"

  constructor(private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params=>{
      if(params["carId"])
      {
        this.getImagesByCarId(params["carId"])
      }
      else
      {
        
      }
    }))
  }

  getCarImages(){
this.carImageService.getCarImages().subscribe((response=>{
  this.carImages=response.data;
}))
  }
  getImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe((response=>{
      this.carImages=response.data;
    }))
   }

   setCurrentCarImage(carImage:CarImage)
   {
     this.currentCarImage=carImage;
   }

   getCurrentCarImageClass(carImage:CarImage) {
    if (carImage == this.currentCarImage) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllCarImageClass() {
    if (!this.currentCarImage) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
