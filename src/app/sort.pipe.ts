import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any,pname: string) {
    return value.sort((a:any, b:any) => {
      if(a[pname] > b[pname]){
         return 1;
      }
      else{
        return -1;
      }

    });
  }

}
