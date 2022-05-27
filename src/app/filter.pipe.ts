import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,statusInf: string) {
    const resultArr=[];
    for(const i of value){
     if(i[statusInf] === 'active'){
       resultArr.push(i);
     }
    }
    return resultArr;

  }

}
