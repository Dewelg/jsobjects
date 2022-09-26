console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr){
    let sum = 0
    arr.forEach(numbers => {
        sum += numbers
    });
    
    return sum;
}

console.log(arraySum(numbers));
    

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let favBook = {
    name: "Flowers for Algeron",
    author: "Daniel Keyes",
    pageCount: 311,
    readornot:"read it 3 times"
    
}

favBook.info = function(){
    console.log(`My fav book is called ${this.name} by ${this.author} it has ${this.pageCount} pages and I have ${this.readornot}.`);
}

favBook.info();