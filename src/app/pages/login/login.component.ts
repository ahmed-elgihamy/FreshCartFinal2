import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  msgError:string='';
  isLoading:boolean=false;
            //  Subscription = new Subscription
            //  any
subObject!:Subscription;
  constructor(private _authService:AuthService ,private _router:Router ){}
  loginForm: FormGroup = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });



  login(form: FormGroup) {
    this.msgError='';
    if(this.loginForm.valid){
      this.isLoading=true;
     this.subObject= this._authService.Signin(form.value).subscribe({
     next:(data:any)=>{
if(data.message=='success'){
  this.isLoading=false;
  localStorage.setItem('userToken',data.token)
this._authService.saveUserDate();

  this._router.navigate(['/home'])
}


     },
     error:(err:HttpErrorResponse)=>{
      this.isLoading=false;
      console.log(err);
      this.msgError=err.error.message
    
      
     }


     })
    }
      
    
 
  }
 ngOnDestroy(): void {
   
this.subObject?.unsubscribe();
 }
  
  
}
