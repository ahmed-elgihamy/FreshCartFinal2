import { Component, OnInit } from '@angular/core';
import { WishListService } from '../shared/service/wish-list.service';
import { Product } from 'src/app/interface/product';
import { CartService } from '../shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{

  products: Product[]=[];
  wishList:string[]=[];
 count:number=0
  constructor(private _wishListService:WishListService
    ,private _cartService:CartService
    ,private _toastrService:ToastrService){}



ngOnInit(): void {
 
  this.getWishList()
}


getWishList(){

  this._wishListService.getWishList().subscribe({

      next:(res)=>{

      this.count=res.count
    
      this.products=res.data
      const newData =res.data.map( (itmes:any)=> itmes._id);

      this.wishList=newData
    }
  })

}











addfav(id:string):void{

  this._wishListService.wishList(id).subscribe({

    next:(res)=>{
      console.log(res);
      this._toastrService.success(res.message)
      this.wishList=res.data
    },error:(err)=>{
      console.log(err);
      
    }
  })
}



removeFav(id:any){

  this._wishListService.removeWish(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._toastrService.success(res.message)
      this.wishList=res.data
    
      const newProduct = this.products.filter((item:any)=>this.wishList.includes(item.id))
      this.products=newProduct
    }
  })
}







addCart(id:string):void{

  this._cartService.addCart(id).subscribe({
  next:(res)=>{
  
    console.log(res);
    this._toastrService.success(res.message , "Frech Cart")
    this._cartService.cartNumber.next(res.numOfCartItems)
  },
  error:(err)=>{
  
    console.log(err);
    
  }
  
  
  
  })
  }
  
 



}
