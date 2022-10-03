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

//exercise3
let sentence = "The quick brown fox jumps over the lazy dog";
function reverseWords(sentence) {
    let words = sentence.split(" ");
    let result = "";
    for(let i = 0; i < words.length; i++){
        let characters = words[i].split("");
        characters.reverse();
        result += characters;

    }
    return result
}

console.log(reverseWords(sentence));

//exersice4
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let data = csvData.split('\n');
console.log(data);
let header1 = data[0];
console.log(header1);
let rows = {
    num1: "Frodo",
    age1: 50,

    num2: "Sam",
    age2:38,

    num3: "Merry",
    age3:36,

    num4: "Pippin",
    age4:26
}

console.log(`${rows.num1} ${rows.age1}`);
console.log(`${rows.num2} ${rows.age2}`);
console.log(`${rows.num3} ${rows.age3}`);
console.log(`${rows.num4} ${rows.age4}`);


   


