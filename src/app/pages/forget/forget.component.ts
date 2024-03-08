import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetpasswordService } from '../shared/service/forgetpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  email:string=''
  displayMassage:string=''
  errorMassage:string=''
constructor(private _forgetpasswordService:ForgetpasswordService ,private _router:Router){}

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

  })

  resetCodeForm: FormGroup = new FormGroup({
      resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{4,}$/),
    ]),
  })

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{3,}$/),

    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),

  })










forgetPassword(){

  let userEmail=this.forgetForm.value
this.email=userEmail

this._forgetpasswordService.forgetPassword(userEmail).subscribe({
next:(res)=>{
  this.displayMassage=res.message
  this.errorMassage= '';

  this.step1=false;
  this.step2=true;
},
error:(err)=>{
  console.log(err);
  this.displayMassage=''

  this.errorMassage= "*" +err.error.message
  this.displayMassage=''

}
  
})

    }

resetCode(){

  let resetCode=this.resetCodeForm.value;
  this._forgetpasswordService.resetCode(resetCode).subscribe({
    next:(res)=>{
      console.log(res);
      this.errorMassage= '';

          this.step2=false;
      this.step3=true;
   
    },
    error:(err)=>{
      console.log(err);
      this.displayMassage=''

      this.errorMassage="*" +   err.error.message
      this.displayMassage=''

    }
  })

}

resetPassword(){
let resetpass =this.resetPasswordForm.value;

// resetpass.email=this.email

this._forgetpasswordService.resetPassword(resetpass).subscribe({

  next:(res)=>{
    console.log(res);
    this.errorMassage= '';

     if(res.token){

      localStorage.setItem('userToken',res.token)
      this._router.navigate(['/home'])
     }
  },
  error:(err)=>{
    console.log(err);
 
    this.displayMassage=''
    this.errorMassage="*" + err.error.message

  }


})

}




  }


