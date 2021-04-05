import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
  }

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      carId:["",Validators.required],
      brandName:["",Validators.required]
    })
  }

 /*  güncelleme yaparken araba renk ve model id ile yapıyorsun */
  update(){
    if(this.carUpdateForm.valid){
      let carModel=Object.assign({},this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationError.length>0){
          console.log(responseError)
          for (let i = 0; i< responseError.error.ValidationError.length; i++) {
          this.toastrService.error(responseError.error.ValidationError[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
    }else{
      this.toastrService.error("Başarısız")
    }
  }

}
