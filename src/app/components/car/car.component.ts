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
  carDtos:CarDto[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];

  dataLoaded = false;
  imageBasePath="https://localhost:44318/";
  defaultImg = "Images/default.jpg"
  filterText="";
  brandId: number;
  colorId: number;

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
        this.getFilteredCarsId(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCarDetails();
        this.getColors();
        this.getBrands();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDtos = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailsById(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.carDtos = response.data;
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
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByBrandName(brandName:string){
    this.carService.getCarsByBrandName(brandName).subscribe((response)=>{
      this.carDtos=response.data;
    })
  }

  getCarsByColorName(colorName:string){
    this.carService.getCarsByColorName(colorName).subscribe((response)=>{
      this.carDtos=response.data;
    })
  }
  
  getFilteredCarsId(brandId:number,colorId:number)
  {
    this.carService.getFilteredCarsId(brandId,colorId).subscribe((response)=>{
      this.carDtos=response.data;
      if(this.carDtos.length==0){
        this.toastrService.error("Aradığınız seçeneklerde araç bulunamamaktadır")
      }
    })
  }
  getFilteredCarsName(brandName:string,colorName:string)
  {
    this.carService.getFilteredCarsName(brandName,colorName).subscribe((response)=>{
      this.carDtos=response.data;
  })
  }

  getSelectedColorId(colorId: number) {
    if(this.colorId == colorId)
    {
      console.log(this.colorId);
      return true;
    }
    else
    {
      return false;
    }
  }

  getSelectedBrandId(brandId: number) {
    if(this.brandId == brandId)
    {
      console.log(this.brandId);
      return true;
    }
    else
    {
      return false;
    }
  }

}
