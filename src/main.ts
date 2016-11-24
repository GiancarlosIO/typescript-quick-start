import { sayHello } from "./greeter"

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student('Giancarlos', "M:", "User");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello('greeting', 'Jose');
console.log('its a testing for watchify');
document.getElementById('greeter').innerText = greeter(user);
console.log(greeter(user));
console.log(sayHello('TypeScript'));
