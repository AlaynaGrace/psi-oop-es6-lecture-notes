/* jshint esversion: 6 */
//Example of composition or the 'has-a' relationship
class Company{
  constructor(name){
    this.name = name;
    this.empList = [];
  }
  addEmployee(employee){
    this.empList.push(employee);
  }
}

class Employee{
  constructor(name,salary){
    this.name = name;
    this.salary = salary;
  }
}

var ourCompany = new Company('Me');
ourCompany.addEmployee(new Employee('Alayna',10000000));
