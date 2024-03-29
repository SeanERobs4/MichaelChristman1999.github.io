/*
    ==================
    Title: bill.js, 
    Author: Michael Christman
    Date: March 31st, 2023
    Description: This is the restaurant bill class module
*/
export class Bill
{
    constructor (_beverages, _appetizers, _mainCourses, _desserts)
    {
        this._appetizers = [];
        this._beverages = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    addBeverage(beverage)
    {
      this._beverages.push(beverage);
    }

    addAppetizer(appetizer)
    {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse)
    {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert)
    {
        this._desserts.push(dessert);
    }

    getTotal()
    {

        let total = 0;
        let beverageTotal = this._beverages.forEach(function(beverage)
            {
                total += parseFloat(beverage.price)
            });

        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
            {
                total += parseFloat(mainCourse.price);
            });

        let appetizerTotal = this._appetizers.forEach(function(appetizer)
            {
                total +=parseFloat(appetizer.price)
            });

        let dessertTotal = this._desserts.forEach(function(dessert)
            {
                total += parseFloat(dessert.price)
            });

        return total.toFixed(2);
    }
}
        
        



    
