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

console.log(newProduct1.calculateTotalPrice()); // 13500
console.log(newProduct2.calculateTotalPrice()); // 15850
