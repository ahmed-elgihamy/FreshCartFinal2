import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(  private _httpClient:HttpClient) { }
cartNumber: BehaviorSubject<any> = new BehaviorSubject(0)


addCart(id:string):Observable<any>{

return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,

{
  "productId": id 
}
)

}


getUserCart():Observable<any>{


return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`

)


}



removeItem(id:string):Observable<any>{

  return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
  )
}



updateProduct(id:string  ,count:number):Observable<any>{

  return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,


  {"count":count}
  )
}





checkOut(id:string ,data:object):Observable<any>{

  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
  
  {  

    shippingAddress:data
  }
  
  )
}

}