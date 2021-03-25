import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarRentService } from 'src/app/services/car-rent.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails:CarDto[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];

  currentCar:Car;
  dataLoaded = false;
  imageBasePath="https://localhost:44318/";
  defaultImg = "Images/default.jpg"
  filterText="";

  constructor(
    private carService: CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getAllCarDetailsByFiltersId(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      }else {
        this.getCarDetails();
        this.getColors();
        this.getBrands();
      }
    });
  }
  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  getAllCarDetailsByFiltersId(brandId:number,colorId:number)
  {
    this.carService.getAllCarDetailsByFiltersId(brandId,colorId).subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
     /*  if(this.cars.length==0){
        this.toastrService.error("Aradığınız seçeneklerde araç bulunamamaktadır")
      } */
    })
  }
  getAllCarDetailsbyFilterName(brandName:string,colorName:string)
  {
    this.carService.getAllCarDetailsbyFilterName(brandName,colorName).subscribe((response)=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
  })
  }
  setCurrentCar(car: Car) {
    this.currentCar=car;
  }
}
