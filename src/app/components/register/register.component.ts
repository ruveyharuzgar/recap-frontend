import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      let registerModel=Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.info("Kayıt başarılı")
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        if(responseError.error.ValidationError.length>0){
          for (let i = 0; i< responseError.error.ValidationError.length; i++) {
          this.toastrService.error(responseError.error.ValidationError[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
      
    }
  }
}
