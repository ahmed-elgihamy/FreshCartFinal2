import { Component, OnInit } from '@angular/core';
import { EcommerceDataService } from '../shared/ecommerce-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  categoriey:any[]=[];


  constructor(private _acommerceDataServiceL:EcommerceDataService 
   
 ){}


ngOnInit(): void {
  this.categories()
}








  categories(){
    console.log('categories');
    
    this._acommerceDataServiceL.getCategories().subscribe({
      next:(data)=>{
  
   this.categoriey=data.data
        console.log(data);
       
        
      },
     error:(err)=>{
  
      console.log(err);
      
     }
  
  
    })
  
  
  }
  


}
