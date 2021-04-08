import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { RentalService } from 'src/app/services/rental.service';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm:FormGroup;
  carId:Car;

  constructor(
    private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createRentalAddForm();
  }

  createRentalAddForm(){
    this.rentalAddForm=this.formBuilder.group({
      carId:["",Validators.required],
      customerId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:[null]
    })
  }

  add(){
    if(this.rentalAddForm.valid){
      let rentalModel=Object.assign({},this.rentalAddForm.value)
      this.rentalService.add(rentalModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
          if(responseError.error.ValidationError){
          this.toastrService.error(responseError.error.ValidationError.ErrorMessage,"Doğrulama Hatası")
        } 
      })
    }else{
      this.toastrService.error("Eksik bilgi girdiniz")
    }
}
}
