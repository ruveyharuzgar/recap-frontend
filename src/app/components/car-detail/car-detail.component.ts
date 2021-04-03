import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car;
  carImages: CarImage[] = [];
  currentImage: CarImage;
  dataLoaded = false;

  rent:Rental[];
  carRent: Car[] = [];
  imageBasePath = 'https://localhost:44318/';
  defaultImg = 'Images/default.jpg';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private toastrService: ToastrService,
    private paymentService: PaymentService,
    private rentalService:RentalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetailsById(params['carId']);
      this.getImagesByCarId(params['carId']);
    });
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.currentImage = this.carImages[carId];
      console.log(this.currentImage);
    });
  }
  getImagePath(image: string) {
    let newPath = this.imageBasePath + image;
    return newPath;
  }
  getImagesByCarIdClass(carImage: CarImage) {
    if (this.currentImage == carImage) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  addRent(car: Car) {
    console.log(car);
    this.toastrService.success('Araba kiralandı', car.modelName);
    this.paymentService.addPayment(car);
  }
}
