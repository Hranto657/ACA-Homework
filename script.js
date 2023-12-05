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

for (let book of arr) {
  console.log(book.turnPage());
  console.log(book.currentPage);
}

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

console.log(getGoodPairs(nums)); // 4
console.log(getGoodPairs(nums2)); // 6
