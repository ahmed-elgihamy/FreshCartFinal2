import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent   implements OnInit {
constructor(private _cartService:CartService){}

numberOfCartItem:number = 0;
cartDetails:any={}

getCart(){


this._cartService.getUserCart().subscribe({

next:(res)=>{

this.cartDetails= res.data
  console.log(res);
  this.numberOfCartItem= res.numOfCartItems;
this.cartDetails= res.data

},
error:(err)=>{

  console.log(err);
  
}




})


}


ChangeCart(){


  this._cartService.getUserCart().subscribe({
  
  next:(res)=>{
  
  this.cartDetails= res.data
    console.log(res);
    this.numberOfCartItem= res.numOfCartItems;
  this.cartDetails= res.data
  
  },
  error:(err)=>{
  
    console.log(err);
    
  }
  
  
  
  
  })
  
  
  }
  
  
  


// dan(){
//   if(this.numberOfCartItem==0){

//     this.ChangeCart()
//   }
// }










deleteProduct(id:string):void{

  this._cartService.removeItem(id).subscribe({
     next:(res)=>{
      console.log(res);
      this.cartDetails=res.data
      if(this.numberOfCartItem==0){

        this.ChangeCart()
      }
      this._cartService.cartNumber.next(res.numOfCartItems)
     },
     error:(err)=>{
      console.log(err);
      
     }



  })
}



changeCount(id:string ,count:number):void{


  if(count>=1){
  this._cartService.updateProduct(id ,count).subscribe({
     next:(res)=>{
      console.log(res);
      this.cartDetails=res.data
     },
     error:(err)=>{
      console.log(err);
      
     }



  })
}
}

















ngOnInit(): void {
  this.getCart()
 
}



}
