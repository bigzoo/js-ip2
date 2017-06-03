import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  templateUrl:'view/meal-list.html'
})

export class MealListComponent{
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit:Meal){
    console.log(mealToEdit);
    this.clickSender.emit(mealToEdit);
  }
  public selectedCalorieness:string ="all";
  onChange(optionFromMenu){
    this.selectedCalorieness = optionFromMenu;
  }
}
