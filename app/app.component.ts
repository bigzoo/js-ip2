import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'intro',
  templateUrl:'view/intro.html'
})

export class AppComponent {
  public masterMealList: Meal[] =
  [
   new Meal('Githeri','Beans were more than maize',10000),
   new Meal('Chipsi','Ni kitamu vilivyo',10000),
   new Meal('Uganga','Unga ilikuwa na weevils',910000)];
  selectedMeal: Meal = null;
  showDetails(clickedMeal:Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing(){
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild:Meal){
    this.masterMealList.push(newMealFromChild);
    //console.log(this.masterTaskList);
  }
}
