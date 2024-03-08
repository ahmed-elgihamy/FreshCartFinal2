import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceDataService {

  constructor(private _httpClient:HttpClient) { }

getAllProduct():Observable<any>{

  return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
}

getIdProduct(id:string):Observable<any>{

  return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}



  getCategories():Observable<any>{

return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)

  }





  getBrands():Observable<any>{

return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)

  }

}
