import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortprod'
})
export class SortprodPipe implements PipeTransform {
  // transform(array: any[], field: string): any[] {
  //   array.sort((a: any, b: any) => {
  //     if (a[field] < b[field]) {
  //       return -1;
  //     } else if (a[field] > b[field]) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   return array;
  // }
  str=''
  transform( args:string): string  {
    for (const val of args) {

      this.str = val+this.str
      this.str=this.str.replace('B','A');
      this.str=this.str.replace('H','A')
      
    }
    return this.str

  }

}
