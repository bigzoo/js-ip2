import { Component, Input} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template:``
})

export class MealComponent{
  @Input() meal:Meal;
  // toggleDone(setCompleteness:boolean){
  //   this.task.done = setCompleteness;
  // }
}
