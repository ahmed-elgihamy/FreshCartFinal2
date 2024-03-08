import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnDestroy{

  msgError:string='';
  isLoading:boolean=false;
            //  Subscription = new Subscription
            //  any
subObject!:Subscription;
  constructor(private _authService:AuthService ,private _router:Router ){}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      RxwebValidators.compare({fieldName:'password' })
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });



  register(form: FormGroup) {
    console.log(form.value);
    this.msgError='';
    if(this.registerForm.valid){
      this.isLoading=true;
     this.subObject= this._authService.Signup(form.value).subscribe({
     next:(data)=>{

console.log(data);

if(data.message=='success'){
  this.isLoading=false;

  this._router.navigate(['/login'])
}


     },
     error:(err:HttpErrorResponse)=>{
      this.isLoading=false;
      console.log(err);
      this.msgError=err.error.message;
    
      
     }


     })
    }
    else{
      console.log("msh tmam");
      
    }
 
  }
 ngOnDestroy(): void {
   
this.subObject?.unsubscribe();
 }
  
  
}












// constructor( private _authService:AuthService , private _router:Router){






// }

//   allControlsTouched(form: FormGroup) {
//     // array of value
//     Object.values(form.controls).forEach((control: any) => {
//       control.markAsTouched();
//       if (control.controls) {
//         this.allControlsTouched(control);
//       }
//     });
// //   }
// }



   
// this.allControlsTouched(form);
    
// if(form.valid && !this.isLoading){
//     this.isLoading=true;
//  this._authService.signUp(form.value).subscribe(
//   {
//      next:(data)=>{

//       console.log(data);
//       if(data.message=='success'){
//         this._router.navigate(['/login'])
//       }
//      },
//      error:(err)=>{
//       console.log(err);
//       this.displayError=err.error.message;
      
//       this.isLoading=false
//      }

//   }
//  )
// 