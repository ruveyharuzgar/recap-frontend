import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createColorUpdateForm();
  }
  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorId:["",Validators.required],
      colorName:["",Validators.required]
    })
  }
  update(){
    if(this.colorUpdateForm.valid){
      let colorModel=Object.assign({},this.colorUpdateForm.value)
      this.colorService.update(colorModel).subscribe(response=>{
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
      this.toastrService.error("Renk Güncelleme Başarısız")
    }
  }
  info()
  {
    this.toastrService.info("Lütfen seçtiğiniz rengin,değiştirmek istediğiniz renkle aynı Id'ye sahip olduğuna dikkat ediniz.")
  }
}
