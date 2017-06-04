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
  getTotal(){
    var total:number=0;
    for (var i =0;i<this.childMealList.length;i++){
      var currentCalorie:number = this.childMealList[i].calories;
      total +=currentCalorie;
    }
    return total;
  }
  getAverage(){
    var average:number=0;
    var total = this.getTotal();
    average=total/this.childMealList.length;
    return average;
  }
  public selectedCalorieness:string ="all";
  onChange(optionFromMenu){
    this.selectedCalorieness = optionFromMenu;
  }

}
