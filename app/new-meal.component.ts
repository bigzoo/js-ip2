import { Component, Output, EventEmitter} from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  templateUrl:'view/new-meal.html'
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name:string,description:string,calories:number){
    var newMealToAdd:Meal = new Meal(name,description,calories);
    this.newMealSender.emit(newMealToAdd);
    //console.log(newMealToAdd);
  }
}
