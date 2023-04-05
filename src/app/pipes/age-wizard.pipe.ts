import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageWizard'
})
export class AgeWizardPipe implements PipeTransform {

  transform(value: number, ...args: any): number {
    //capture the actual year 
    let year: number = new Date().getFullYear();
    let age: number = year.valueOf() - value.valueOf();
    
    return age;
  }

}
