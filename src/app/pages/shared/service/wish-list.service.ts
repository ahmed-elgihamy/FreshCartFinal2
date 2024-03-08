import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient:HttpClient) { }

baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`


wishList(productId:string):Observable<any>{

  return this._HttpClient.post(this.baseUrl+`wishlist`,
  
  {
    productId: productId 

  }
  
  )
}

getWishList():Observable<any>{

  return this._HttpClient.get(this.baseUrl +'wishlist')
}


removeWish(productId:string):Observable<any>{

  return this._HttpClient.delete(this.baseUrl+`wishlist/${productId}`)
}

}
