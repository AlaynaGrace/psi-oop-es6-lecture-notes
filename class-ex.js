/* jshint esversion: 6 */

//*** Parent Class ***//

class Animal{
  constructor(name,color){
    this.name = name;
    this.color = color;
    this.numTails = 1;
  }

  poop(){
    console.log('everyone poops!',this.name);
  }
}


//*** Children Classes ***//

class Cat extends Animal{
  constructor(name,color,claws){
    //order matters
    //super must be first
    super(name,color);
    this.lives = 9;
    this.numClaws = claws;
  }
  meow(){
    console.log(this.name,"meowed");
  }
}

var ourCat = new Cat('Ember','Calico', 10);
console.log('ourCat', ourCat);
ourCat.meow();
ourCat.poop();
console.log('');

class Dog extends Animal{
  //constructor = default function for every class
  constructor(name,color){
    super(name,color);
  }
  getName(){
    return this.name;
  }
  setName(name){
    this.name = name;
  }
  bark(){
    console.log(this.name,"barked");
  }
}

var ourDog = new Dog('Barkly','purple');
console.log('ourDog:',ourDog);
ourDog.bark();
ourDog.poop();
