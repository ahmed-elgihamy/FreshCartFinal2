import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit {
  constructor(private _authService:AuthService ,private _CartService:CartService ){}

cartN:Number=0;

ngOnInit(): void {
  
  this._CartService.cartNumber.subscribe({

    next:(res)=>{
      
      this.cartN=res
    }
  })

this._CartService.getUserCart().subscribe({

  next:(res)=>{

this.cartN=res.numOfCartItems;
  }
})


}






  logOut(){

    this._authService.SinOut()
  }

}
