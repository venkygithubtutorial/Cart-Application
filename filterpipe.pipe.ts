import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, args: any):any {
    console.log(value);
    console.log(args);
    // if (args.length>=3) {
    //   var filteredfanmissions = value.filter((fanmission:any) =>
    //    fanmission.category.search(new RegExp(args, "i")) >= 0);
    //   if (filteredfanmissions != 0) {
    //     return filteredfanmissions;
    //   }
    // }
    //  else {
    //   return value;
    // }
    if(args.length>=3){
      return value.filter((val:any)=>{
        let recValue=val.category.includes(args);
        return recValue;
      })
    }
    return value;
  }

}
