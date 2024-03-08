import { Component, OnInit } from '@angular/core';
import { EcommerceDataService } from '../shared/ecommerce-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/interface/product';
import { CartService } from '../shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from '../shared/service/wish-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
 products: Product[]=[]
 

categoriey:any[]=[];
searchTerm:string='';
wishList:string[]=[]
 customOptions: OwlOptions= {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  margin:10,
  autoplay:true,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
}

mainSliderOptions: OwlOptions= {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  autoplay:true,
  navText: ['', ''],
  items:1,
  nav: true
}
  constructor(private _acommerceDataServiceL:EcommerceDataService 
    , private _cartService:CartService 
    , private _toastrService: ToastrService
    ,private _wishListService:WishListService
    ){}

  
  
ngOnInit(): void {
 this.categories()
this.getAllProducts()
this.getWishList()
}
  
getAllProducts(){
console.log('getAllProducts');

  this._acommerceDataServiceL.getAllProduct().subscribe({

next:(res)=>{

  console.log(res);
  this.products=res.data
 
  
},
error:(err)=>{

  console.log(err);
  
}



    
  })
}
categories(){
  console.log('categories');
  
  this._acommerceDataServiceL.getCategories().subscribe({
    next:(data)=>{

 this.categoriey=data.data
      console.log(data);
     
      
    },
   error:(err)=>{

    console.log(err);
    
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





getWishList(){

  this._wishListService.getWishList().subscribe({

      next:(res)=>{
      console.log(res);
     
      const newData =res.data.map( (itmes:any)=> itmes._id);

      this.wishList=newData
    }
  })

}






 }

