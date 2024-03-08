import { Component, OnInit } from '@angular/core';
import { EcommerceDataService } from '../shared/ecommerce-data.service';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{

  allBrands:any={}
  constructor(private  _ecommerceDataService:EcommerceDataService  ,private _AuthService:AuthService){}


ngOnInit(): void {
  this.getAllBrands()
}


getAllBrands(){

  this._ecommerceDataService.getBrands().subscribe({

next:(res)=>{
  console.log(res);
 this.allBrands=res.data
 this._AuthService.saveUserDate()
}


  })
}






}
