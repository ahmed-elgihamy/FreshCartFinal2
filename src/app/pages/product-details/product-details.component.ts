import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceDataService } from '../shared/ecommerce-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent  implements OnInit{

getProductDetails:any={};

products: Product[]=[]
idProduct:any=''

productSlider: OwlOptions= {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  navText: ['', ''],
  items:1,
  nav:false
}



constructor( private _activatedRoute:ActivatedRoute , private _ecommerceDataService:EcommerceDataService ,private _cartService:CartService ,private _toastrService:ToastrService){}
ngOnInit(): void {
  this.getProductId()
}

getProductId(){

this._activatedRoute.paramMap.subscribe({

next:(param)=>{

              // :any
 this.idProduct= param.get('id')!;
  this._ecommerceDataService.getIdProduct(this.idProduct).subscribe({

    next:(res)=>{

      console.log(res.data);
      this.getProductDetails= res.data;
    }
  })

}


})


}


addCart(id:string):void{

  this._cartService.addCart(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.products=res.products
    this._toastrService.success(res.message , "Frech Cart")
    this._cartService.cartNumber.next(res.numOfCartItems)

    
  },
  error:(err)=>{
  
    console.log(err);
    
  }
  
  
  
  })
  }
  


}
