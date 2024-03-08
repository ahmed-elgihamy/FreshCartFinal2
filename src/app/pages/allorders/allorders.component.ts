import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/service/orders.service';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent  implements OnInit{
  products:any

  constructor(private _ordersService:OrdersService ){}
  
  
  ngOnInit(): void {
    this._ordersService.getAllOrders().subscribe({
      next:(res)=>{
        console.log(res);       
     
        this.products=res.data
      }
  })
  





}
















}