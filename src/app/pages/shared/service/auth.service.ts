import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Userr } from 'src/app/userr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient ,private _router:Router) { }





userDate= new BehaviorSubject(null);;
// userDate:any;
saveUserDate():void{

if(localStorage.getItem("userToken") != null){

let encodeToken:any = localStorage.getItem("userToken") ;
let decodeToken:any =  jwtDecode(encodeToken)

this.userDate.next(decodeToken);
// this.userDate=decodeToken

console.log(this.userDate)

}




}








  Signup(info:Userr):Observable<any>{

return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , info)

}



Signin(info:object):Observable<any>{

  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , info)
  
  }
  

  SinOut(){
 localStorage.removeItem('userToken')
this._router.navigate(['/login'])

  }






}
