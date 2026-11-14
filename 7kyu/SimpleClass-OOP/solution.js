//https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript

//Instruction

//For this exercise you should create a JavaScript class called Animal. Its constructor() takes in name and type parameters. It should have a toString() method that returns a formatted string containing the name and type properties. It should also allow the name property to be set.

// The following is an example of how the class could be used and what the expected return values should be:

// const dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // 'dog'
// dog.name; // 'Max'
// dog.name = 'Lassie';
// dog.name; // 'Lassie'


//Solution

class Animal {
    // parameter goes in 
  constructor (name, type){
    // sets properties of the constructor
    this.name = name;
    this.type = type;
    }
    // converts everything to string
  toString (){
    return `${this.name} is a ${this.type}`;
  }  

  }
const cat = new Animal ('Sam', 'cat');
console.log(cat.toString());

