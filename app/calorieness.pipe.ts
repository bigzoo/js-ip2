import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe ({
  name:'calorieness',
  pure:false
})

export class CalorienessPipe implements PipeTransform{
  transform(input: Meal[], desiredCalorieness) {
    var output: Meal[] = [];
    if(desiredCalorieness === "less") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalorieness === "more") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
