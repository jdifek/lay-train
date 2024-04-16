'use strict';

const bob = {
  firstName: 'Bob',
  lastName: 'Smyth',
  age: 39,

  print: printInfo,
  print2() {
    const {age = 0} = this;
    console.log(age);
  }
};

bob.print();
bob.print2();


function printInfo() {
  const {firstName, lastName , age = 0} = this;
  const message = `!!!${firstName} ${lastName} is ${age}!!!`;

  console.log(message);
}

function printInfoq(user) {
  const message = `!!!${user.firstName}`;

  console.log(message);
}

printInfoq(bob);