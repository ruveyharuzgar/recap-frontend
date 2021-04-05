import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }
  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required]
    })
  }
  update(){
    if(this.brandUpdateForm.valid){
      let brandModel=Object.assign({},this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response=>{
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
