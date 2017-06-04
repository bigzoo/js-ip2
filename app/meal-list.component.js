"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MealListComponent = (function () {
    function MealListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.selectedCalorieness = "all";
    }
    MealListComponent.prototype.editButtonHasBeenClicked = function (mealToEdit) {
        console.log(mealToEdit);
        this.clickSender.emit(mealToEdit);
    };
    MealListComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.childMealList.length; i++) {
            var currentCalorie = this.childMealList[i].calories;
            total += currentCalorie;
        }
        return total;
    };
    MealListComponent.prototype.getAverage = function () {
        var average = 0;
        var total = this.getTotal();
        average = total / this.childMealList.length;
        return average;
    };
    MealListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedCalorieness = optionFromMenu;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "clickSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            templateUrl: 'view/meal-list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map