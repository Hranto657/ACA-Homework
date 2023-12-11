// Lesson 2 Homework

// Սարքել Class, որը իրենից կներկայացնի ինչ-որ գրքերի նկարագրություն։
// Ամեն գիրք պետք է ունենա հեղինակ, թողարկման տարեթիվ, էջերի քանակ և այս պահին բաց էջի համարը։
// Գրքերը պետք է ունենան թերթելու մեթոդ, որը կանչելուց հետո տվյալ գրքի այս պահին բաց էջի համարը կմեծանա մեկով քանի դեռ գիրքը չի վերջացել (վերջացածի ժամանակ կարող եք ոչ մի բան չանել)։

// Հուշում: Թերթելու մեթոդի տարածքում կարող եք հասանելիություն ունենալ այդ պահին դիտարկվող օբյեկտին this անունով փոփոխականի միջոցով

class Book {
  constructor(author, releaseDate, pagesCount, currentPage) {
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.currentPage = currentPage;
  }

  turnPage() {
    for (let i = this.currentPage; i < this.pagesCount; i++) {
      console.log(`current page in ${this.author}`, i);
      this.currentPage++;
      if (this.currentPage === this.pagesCount) {
        console.log(`Done! The ${this.author}'s book is over.`);
      }
    }
  }
}

const arr = [
  new Book("author1", 2023, 20, 5),
  new Book("author2", 2022, 40, 3),
  new Book("author3", 2005, 50, 25),
  new Book("author4", 2010, 80, 65),
];

let nums = [1, 2, 3, 1, 1, 3];
let nums2 = [1, 1, 1, 1];

function getGoodPairs(arr) {
  let goodPairs = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        goodPairs++;
      }
    }
  }
  return goodPairs;
}

// Lesson 3 Homework

// Սարքել Employee Class-ը, որը իրենից կներկայացնի ինչ-որ աշխատակցի նկարագրություն։
// Բոլոր աշխատողները պետք է ունենան անուն, պաշտոն ու աշխատելու ֆունկցիա։ Աշխատելու ֆունկցիան կանչելիս անհրաժեշտ է ուղղակի տպել “working”.
// Պետք է նաև ունենալ մեկ այլ class, որի անունը կլինի Manager.
// Մենեջերը պետք է ունենա նույն հնարավորությունները ինչ որ սովորական աշխատակիցը, ուղղակի պետք է նաև ունենա haveMeetings ֆունկցիա,
// որը կանչելու դեպքում պետք է տպել “մենեջերի անունը+is in the meeting”. Կարող եք սարքել ևս մեկ կլասս՝ ըստ ցանկության

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  work() {
    console.log("working");
  }
}

const worker = new Employee("Jack", "engineer");
// console.log(worker.work()); // working

class Manager extends Employee {
  haveMeetings() {
    console.log(`${this.name} is in the meeting`);
  }
}

const manager = new Manager("Chloe", "manager");
// console.log(manager.work()); // working
// console.log(manager.haveMeetings()); // Chloe is in the meeting

class Director extends Employee {
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

const director = new Director("Leonardo", "director");

// console.log(director.work()) // working
// console.log(director.sleep()) // Leonardo is sleeping

// LESSON 4 Homework 1
// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price.
// Include a method to calculate the total price by multiplying the price by the quantity
// (quantity: քանակ, պետք ա փոխանվել ֆունկցիային որպես պարամետր).
// Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the additional tax.
// Override the total price calculation method to add the special tax amount to the total price calculation.
// Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(productId, productName, price, quantity) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.quantity * this.price;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, productName, price, quantity, tax) {
    super(productId, productName, price, quantity);
    this.tax = tax;
  }

  calculateTotalPrice() {
    return super.calculateTotalPrice() + this.tax;
  }
}

const newProduct1 = new PersonalCareProduct(15, "milk", 2500, 5, 1000);
const newProduct2 = new PersonalCareProduct(25, "water", 1500, 10, 850);

// console.log(newProduct1.calculateTotalPrice()); // 13500
// console.log(newProduct2.calculateTotalPrice()); // 15850

// LESSON4 Homework 2

var bunny = {
  lovesCarrots: true,
  f: function () {
    return this.lovesCarrots;
  },
};

// console.log(bunny.f()); // true
// ---------------------------------------------------
var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(person.getName()); // Penelope Barrymore
// ---------------------------------------------------
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};
// console.log(o.f()); // 37
// ---------------------------------------------------
var golfGames = {
  tournament: "The Masters",
  players: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 },
  ],
  showAllGames: function () {
    currObject = this;
    this.players.forEach(function (player) {
      console.log(player.name + " is playing at " + currObject.tournament);
    });
  },
};

// golfGames.showAllGames(); // T. Woods is playing at The Masters, P. Mickelson is playing at The Masters
// ---------------------------------------------------
var player1 = {
  firstName: "Jack",
  lastName: "Black",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var player2 = {
  firstName: "Bunny",
  lastName: "Rabbit",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var game = {
  players: [],

  listPlayers: function () {
    this.players.forEach(function (player) {
      console.log(player.getName());
    });
  },
};

game.players.push(player1, player2);
// game.listPlayers(); // Jack Black, Bunny Rabbit
// ---------------------------------------------------
function setBodyTextColor(color) {
  this.body.style.color = color;
}

document.setBodyTextColor = setBodyTextColor;
document.setBodyTextColor("green");
document.setBodyTextColor("blue");

function getBodyTextColor() {
  return this.body.style.color;
}

document.getBodyTextColor = getBodyTextColor;
// console.log(document.getBodyTextColor()); // blue
// ---------------------------------------------------
var Counter = {
  count: 0,
  add: function () {
    this.count++;
  },
};

Counter.add();
// console.log(Counter.count); // 1
var addToCount = Counter.add;
addToCount();
// console.log(Counter.count); // 1
// ---------------------------------------------------
var Counter = {
  count: {
    currentCount: 0,
  },
  add: function () {
    this.count++;
  },
};

Counter.add();
// console.log(Counter.count); // 1

var AnotherCounter = {};
AnotherCounter.count = Counter.count.cuurentCount;
AnotherCounter.add = Counter.add;
AnotherCounter.add();

// console.log(AnotherCounter.count);// 2
// console.log(Counter.count) // 1

var YetAnotherCounter = Counter;
// Counter.add();// 1
// console.log(YetAnotherCounter.count) // 2

// LESSON 5 Homework 1
// Փորձեք գուշակել output-ը

// var func = function () {
//   console.log(this);
// }.bind(1);

// func(); // 1
// // ---------------------------------------------------
// var func = function () {
//   console.log(this);
// }.bind(1);

// var obj = {
//   callFun: func,
// };
// obj.callFun.func(); // error - obj.callFun.func is not a function
// // An error occurred because func is a method of the obj.callFun object and can't be called using the func() syntax.
// obj.callFun() // 1
// // ---------------------------------------------------
// function checkFun(a, b, c) {
//   console.log(this); // 1
//   console.log(a); // 2
//   console.log(b); // 3
//   console.log(c); // 4
// }
// checkFun.call(1,2,3,4);
// // ---------------------------------------------------
// function checkFun(a, b, c) {
//   console.log(this); // 1
//   console.log(a); // 2
//   console.log(b); // 3
//   console.log(c); // 4
// }
// checkFun.apply(1,[2,3,4]);
// // ---------------------------------------------------
// function sumOfNumbers() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// var sum = sumOfNumbers(1, 2, 3);
// console.log(sum); // 6
// // ---------------------------------------------------
// function sumOfNumbers() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// var sum = sumOfNumbers.call(null, 1, 2, 3);
// console.log(sum); // 6
// // ---------------------------------------------------
// function sumOfNumbers() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// var numbers = [1, 2, 3];
// var sum = sumOfNumbers.apply(null, numbers);
// console.log(sum); // 6
// // ---------------------------------------------------
// function updateZipCode() {
//   console.log(this);
// }
// updateZipCode.call(1); // 1
// // ---------------------------------------------------
// var updateZipCode = function () {
//   console.log(this);
// };
// updateZipCode.call({}); // {}
// // ---------------------------------------------------
// var updateZipCode = function () {
//   console.log(this);
// };
// updateZipCode.call({ zip: '11787'}); // {zip: '11787'}
// // ---------------------------------------------------
// var updateZipCode = function () {
//   console.log(this);
// };
// var zipCode = {
//   zip: "11787",
// };
// updateZipCode.call(zipCode); // {zip: '11787'}
// // ---------------------------------------------------
// var updateZipCode = function (newZip, country) {
//   console.log(newZip + " " + country);
// };
// var zipCode = {
//   zip: "11787",
// };
// updateZipCode.call(zipCode, '11888', 'us'); // 11888 us
// // ---------------------------------------------------
// var updateZipCode = function (newZip, country) {
//   console.log(newZip + " " + country);
// };
// var zipCode = {
//   zip: "11787",
// };
// updateZipCode.apply(zipCode, ['11888', 'us']); // 11888 us
// // ---------------------------------------------------
// ("use strict");
// var zipcode = {
//   checkZipcode: function () {
//     console.log(this); // {checkZipcode: f()} or object zipcode
//     function updateZipCode() {
//       console.log(this); // {checkZipcode: f()} or object zipcode
//     }
//     updateZipCode.call(this);
//   },
// };
// zipcode.checkZipcode();
// // ---------------------------------------------------
// ("use strict");
// var zipcode = {
//   checkZipcode: function () {
//     console.log(this); // {checkZipcode: f()} or object zipcode
//     var updateZipCode = function () {
//       console.log(this); // {checkZipcode: f()} or object zipcode
//     }.bind(this);
//     updateZipCode();
//   },
// };
// zipcode.checkZipcode();
// // ---------------------------------------------------
// "use strict";
// var person = {
//     name : "Jack",
//     prop : {
//         name : "Daniel",
//         getName : function() {
//             return this.name;
//         }
//     }
// }

// var oldname = person.prop.getName.bind(person);
// console.log(oldname()); // Jack

// var  oldname = person.prop.getName();
// console.log(oldname); // Daniel

// LESSON 5 Homework 2

function f() {
  alert(this); // null
}

let user = {
  g: f.bind(null),
};

user.g();
// ---------------------------------------------------
function f() {
  alert(this.name); // Вася
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();
// ---------------------------------------------------
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); // undefined
// ---------------------------------------------------
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk, user.loginFail); // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// ---------------------------------------------------
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(?, ?); // askPassword(user.login.bind(user, true), user.login.bind(user, false));
