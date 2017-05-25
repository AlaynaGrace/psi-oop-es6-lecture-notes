/* jshint esversion: 6 */

class Vehicle{
    constructor(wheels, color, engineType, lights, make, model, fuel){
      this.numberOfWheels = wheels;
      this.color = color;
      this.engineType = engineType;
      this.lights = lights;
      this.make = make;
      this.model = model;
      this.fuel = fuel;
    }
    idle(){
      console.log('it idles!');
    }
}

class PickupTruck extends Vehicle{
  constructor(wheels, color, engineType, lights, make, model, fuel, bedSize, seatbelts){
    super(wheels, color, engineType, lights, make, model, fuel);
    this.bedSize = bedSize;
    this.seatbelts = seatbelts;
  }
  haulStuff(){
    console.log('Hauling lots of stuff!');
  }
}

class Bus extends Vehicle{
  constructor(wheels, color, engineType, lights, make, model, fuel, routes, numberOfExits){
    super(wheels, color, engineType, lights, make, model, fuel);
    this.route = route;
    this.numberOfExits = numberOfExits;
  }
  driveOnShoulder(){
    console.log('Its driving on the shoulder!');
  }
}

class Motorcycle extends Vehicle{
  constructor(wheels, color, engineType, lights, make, model, fuel, bodyType, helmet){
    super(wheels, color, engineType, lights, make, model, fuel);
    this.bodyType = bodyType;
    this.helmet = helmet;
  }
  wheelie(){
    console.log('Poppin a wheelie bro!');
  }
}
