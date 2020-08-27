const menu = {
    _courses : {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers(){
          return this._courses.appetizers;
    },
    set appetizers(appetizers){
        return this._courses.appetizers;
    },
     get mains(){
       return this._courses.mains;
    },
    set mains(mains){
      return this._courses.mains;
    },
     get desserts(){
       return this._courses.desserts;
    },
    set desserts(desserts){
      return this._courses.desserts;
    },

    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
       desserts: this.desserts
      };
  
    },

    addDishToCourse(courseName, dishName, dishPrice)
    {
          const dish = {
            name: dishName,
            price: dishPrice,
          };
return this._courses[courseName].push(dish);
    },


     getRandomDishFromCourse(courseName){
       const dishes= this._courses[courseName];
       const randomIndex= Math.floor(Math.random() * dishes.length);
       return dishes[randomIndex];
     },


     generateRandomMeal() {
       const appetizers= this.getRandomDishFromCourse('appetizers');
       const mains= this.getRandomDishFromCourse('mains');
       const desserts= this.getRandomDishFromCourse('desserts');
       const totalPrice = appetizers.price + mains.price + desserts.price;
       return `Your meal is ${appetizers.name} , ${mains.name}, and ${desserts.name}, and the total price is ${totalPrice}`;

     }
};


menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'Wings', 4.00);
menu.addDishToCourse('appetizers', 'fries', 5.00);


menu.addDishToCourse('mains', 'steak', 14.00);
menu.addDishToCourse('mains', 'chicken', 24.00);
menu.addDishToCourse('mains', 'fish', 54.00);


menu.addDishToCourse('desserts', 'choclate', 14.00);
menu.addDishToCourse('desserts', 'vanilla', 21.00);
menu.addDishToCourse('desserts', 'fruits', 5.00);




const meal = menu.generateRandomMeal();
console.log(meal);
