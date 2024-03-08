import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( products:Product[],term:string):Product[] {
    return  products.filter( (proudct)=>proudct.title.toLowerCase().includes(term.toLowerCase()));
  }

}
