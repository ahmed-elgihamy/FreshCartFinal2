import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { EcommerceDataService } from '../shared/ecommerce-data.service';
import { Product } from 'src/app/interface/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  searchTerm:string='';

  constructor(private _acommerceDataServiceL:EcommerceDataService
    , private _cartService:CartService
    , private _toastrService: ToastrService){}


    ngOnInit(): void {
  
     this.getAllProducts()
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
      addCart(idf:string):void{

        this._cartService.addCart(idf).subscribe({
        next:(res)=>{
        
          console.log(res);
          this._toastrService.success(res.message , "Frech Cart")
          
        },
        error:(err)=>{
        
          console.log(err);
          
        }
        
        
        
        })
        }
        

}
