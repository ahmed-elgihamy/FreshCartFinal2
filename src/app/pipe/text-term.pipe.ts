import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTerm'
})
export class TextTermPipe implements PipeTransform {

  transform(text:string , limit:number){
    return text.split(' ').slice(0 ,limit).join(' ') ;
  }

}
