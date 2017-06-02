import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  templateUrl:'view/edit-meal.html'
})

export class EditMealComponent{
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }
}
