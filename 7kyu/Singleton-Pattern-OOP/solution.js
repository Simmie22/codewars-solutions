// kata's  link solution: https://www.codewars.com/kata/534fcca5edb124cfe6000f60/train/javascript
//kata 7
//THE INSTRUCTION


// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Create a Singleton class, so that there is always a unique instance of Singleton in the session.

// Example:

// const [obj1, obj2] = [new Singleton, new Singleton];
// obj1 instanceof Singleton; // => true
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1



// THE SOLUTION
//creating a class called Singleton
class Singleton {
  constructor() {
    //checking if an instance of the class already exists which is stored in the class property called instance and also firstly store the instance to the class function Singleton.instance
    if (Singleton.instance) {
      return Singleton.instance;
    }
    //creating the instance to the current instance if no instance exists
    Singleton.instance = this;
  }
}
let obj1 = new Singleton();
let obj2 = new Singleton();
console.log(obj1 === obj2); // true