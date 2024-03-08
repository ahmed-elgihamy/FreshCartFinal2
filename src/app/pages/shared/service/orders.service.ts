import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private  _httpClient:HttpClient) { }

  userDate:any;

  saveUserDate():void{
  
  if(localStorage.getItem("userToken") != null){
  
  let encodeToken:any = localStorage.getItem("userToken") ;
  let decodeToken =  jwtDecode(encodeToken)
  
  this.userDate=decodeToken;
  console.log(this.userDate)
  
  }
  
  
  
  
  }



  getAllOrders():Observable <any>
  {                                                
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders`);
 }






}
