import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor( private _httpClient:HttpClient) { }

baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`

forgetPassword(Email:string):Observable<any>{

  return this._httpClient.post(this.baseUrl+`forgotPasswords`,Email)
}



resetCode(resetCode:object):Observable<any>{

  return this._httpClient.post(this.baseUrl+`verifyResetCode`,resetCode)
}



resetPassword(resetpassword:string):Observable<any>{

  return this._httpClient.put(this.baseUrl+`resetPassword`,resetpassword)
}





}
