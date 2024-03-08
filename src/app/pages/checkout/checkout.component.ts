import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/service/cart.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  implements OnInit{

  isLoading:boolean=false;
  checkoutId:any='';


  constructor( private _activatedRoute:ActivatedRoute , private _cartService:CartService){}
 checkout: FormGroup = new FormGroup({
    details: new FormControl(null, [
      Validators.required,
    
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    city: new FormControl(null, [
      Validators.required,
    ]),
  
  });

ngOnInit(): void {
  this._activatedRoute.paramMap.subscribe({
   next:(params)=>{
    this.checkoutId=params.get('id')
   }

  })
}

  handleForm(){

    console.log(this.checkout.value);
    if(this.checkout.valid){
      this.isLoading=true;
this._cartService.checkOut(this.checkoutId,this.checkout.value).subscribe({

    next:(res)=>{
      console.log(res);
      
      if(res.status=='success'){

        window.open(res.session.url ,'_self')
      }
    },
    error:(err:HttpErrorResponse)=>{
      this.isLoading=false;
      console.log(err);

    }
  })

  }

 


}
}