// "use strict";

// 1. this di dalam object
const car = {
  brand: "Toyota",
  color: "Blue",
  printCarData: function () {
    return `Mobilku adalah ${this.brand} dan warnanya ${this.color}`;
  },
  printThis() {
    return this;
  },
};

console.log(car.printCarData());
console.log(car.printThis());

// 2. this alone
this;
console.log(this);

// 3. this inside reguler function
function printThisFunc() {
  return this;
}

console.log(printThisFunc());
