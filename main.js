// let total = 0, count = 1;
// while (count <= 10) {
//     total += count;
//     count+=1;
// }
// console.log(total);
// console.log(count)
// console.log(2+2)


//page27 control flow
// conditions and loops

// let theNumber = Number(prompt("pick a number"))
// console.log(`your number is the square root of ${theNumber * theNumber}`)

// let a =5 , b= 2;

// console.log(`let total = ${a + b}`)
// while loops
// let number = 0;
// while (number <= 12){
//     console.log(number)
//     number+=2
// }

//for loops page 32
//25 jan/2029

//switch
//  switch(prompt('what is the weather like?')) {
//      case 'rainy':
//          console.log('remember to bring an umbrella');
//     break;
//     case 'sunny':
//         console.log('dress lightly');
//     break;
//     case 'cloudy':
//     console.log('go outside');
//     break;
//     default:
//         console.log('unknown weather type');
//     break;        
    

    
//  }

// switch(prompt('chose a number')) {
//     case 10 :
//     console.log('its should be above 10');
//     break;
//     case 20:
//     connsole.log('it should be less than 20')
//     break;
//     default:
//     console.log('it should be an a number between 20 and 10')
//     break;
    
// }

//triangle loop

// for( let result = '#'; result.length < 8; result+='#')
// console.log(result);

//

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
*/

// for( let number = 0; number <101; number++){
//     let output = '';
//     if(number % 3 == 0){
//        output +='fizz'
//     }
//     if(number % 5 == 0 ) {
//         output += 'buzz'
//     }
//     if(number % 5 == 0 && number % 3 == 0) {
//         output += 'fizzbuzz'
//     }
//     console.log(output || number)
// }

// for( let number = 0; number < 101; number++){
//   if(number % 3 == 0) {
//       console.log('fizz')
//   }
//   if(number % 5 == 0) {
//       console.log('buzz')
//   }
//   if( number % 5 == 0 && number % 3 == 0) {
//       console.log( 'fizbuzz')
//   }
//   else 
//   console.log(number)
// }

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:


for(let number = 0; number <= 8; number++){
    let output = '';
    if( number % 2 == 0){
        output = '# # # # '
    }
    else
    output = ' # # # #'
    console.log(output)
}
*/

//page 39 functions

let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);
console.log(y)
// → 60
}
// y is not visible here
console.log(x + z );
//console.log(y)

// → 40
console.log('the future says', future());

function future(){
    return 'you will nevr have flying cars'
}

function greet(who) {
    console.log("Hello " + who);
    }
    greet("Harry");
    greet('segun')
    // console.log("Bye");

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5))
console.log(multiplier(2))

function findSolution(target) {
    function find(current, history) {
    if (current == target) {
    return history;
    } else if (current > target) {
    return null;
    } else {
    return find(current + 5, `(${history} + 5)`) ||
    find(current * 3, `(${history} * 3)`);
    }
    }
    return find(1, "1");
    }
    console.log(findSolution(24));
    // → (((1 * 3) + 5) * 3)

    //page 51

//     We want to write a program that prints two numbers: the numbers of cows
// and chickens on a farm, with the words Cows and Chickens after them and zeros
// padded before both numbers so that they are always three digits long.
// 007 Cows
// 011 Chickens

// function printFarmInventory(cows, chickens, pigs){
//     let cowString = String(cows);
//     while(cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);

//     let chickenString = String(chickens);
//     while(chickenString.length< 3) {
//         chickenString= "0" + chickenString
//     }
//     console.log(`${chickenString} Chickens`)
    
//     let pigString = String(pigs);
//     while(pigString.length< 3) {
//         pigString= "0" + pigString
//     }
//     console.log(`${pigString} pigs`)

// }
// printFarmInventory(7, 11, 1)

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while(numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, 'cows');
    printZeroPaddedWithLabel(chickens, 'chickens');
    printZeroPaddedWithLabel(pigs, 'pigs');
}

printFarmInventory(1,2,6);


function zeropad(number, width){
    let string = String(number);
    while(string.length < width) {
        string = '0' + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeropad(cows, 3)} Cows`)
    console.log(`${zeropad(chickens, 3)} Chickens`)
    console.log(`${zeropad(cows, 3)} pigs`)
}

printFarmInventory(1,1,1)

function countchar(string, ch){
let counted = 0;
for(let i = 0;i < string.length; i++){
    if (string[i] == ch) {
        counted += 1;
    }
}
 return counted
}
function countB(string){
    return countchar(string, 'b')
}

console.log(countB('beans'))

console.log(countchar('cat', 'a'))

// page 71 arrays

//tried it with  a for(let item of element loop)

function test(string, ch){
    let counted = 0
    for(let s of string) {
        if (s == ch) {
            counted += 1
        }
    }
    return counted
}
 console.log(test('teeest','e'))

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
 return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task)
}

//rest or spread params

function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if (number > result) result = number;
    }
    return result
}
console.log(max(4,1,9,-2))

let word = ['never', 'fully'];
console.log(['will',...word,'inses'])

//excercise

// function range(start, end) {
//     let count = 0;
//     for(let i = start; i<= end;i++){
//         count +=1
//     }
//     return count
// }

// console.log(range(2,5))

function rangeArr(start, end) {
    let arr = [];
    for(let i = start; i<= end;i++){
        arr.push(i)
    }
    return arr
}

console.log(rangeArr(2,5))

function sum(arr){
    let total = 0
 for(let a of arr) {
    total +=a
 }
 return total
}
console.log(sum([1,5,2]))

console.log(sum(rangeArr(1,10)))



function rangeArrStep(start, end, step) {
    let arr = [];
    for(let i = start; i<= end;i+step || i++){
        arr.push(i)
    }
    return arr
}

console.log(rangeArrStep(2,10))

//79
 
repeat = (n, action) => {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log)

let labels = [];
repeat(5, i => {
    labels.push(`unit ${i + 1}`);
});
console.log(labels)

// higher order function

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(1))

function test(n) {
    return m => m * n;
}

let test1 = test(2);
console.log(test1(10))

function noisy(f) {
    return (...args) => {
        console.log ('calling with', args);
        let result = f(...args);
        console.log('called with', args,', returned', result);
        return result
    }
}

noisy(Math.min) (3,2,1)

function unless(test, then) {
    if(!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, 'is even')
    })
})

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

//higher order function

var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

/*
The average grade of this classroom
The average grade of the boys
The average grade of the girls
The higher note among the boys
The higher note among the girls
*/

//average grade of the class
const avgradeArr = grades.map(grades => grades.grade)

const toAvgrade = avgradeArr.reduce(function (a, b) {
    return a + b
}, 10)

function number() {
    let count = 0 ;
    for (obj of grades) {
        count += 1
    }
    return count

}
console.log(number(grades))

console.log(avgradeArr)
console.log(toAvgrade)

function avClGrade(a,b){
    return a/b
}

console.log(avClGrade(toAvgrade, number()))

//average graade of boys
const boys = grades.filter(boys => boys.sex === 'M')
function number2() {
    let count = 0 ;
    for (obj of boys) {
        count += 1
    }
    return count

}
console.log(number(grades))

const boysGrade = boys.map(boysGrade => boysGrade.grade)

console.log(number2(boys))
console.log(boys)
console.log(boysGrade)

const tolBoysGrade = boysGrade.reduce((a,b)=> (a+b))

console.log(tolBoysGrade);

console.log(avClGrade(tolBoysGrade,number2()));

//The average grade of the girls

const girls = grades.filter(girls => girls.sex == "F");
console.log(girls)

const girlsGrade = girls.map(girls => girls.grade)
console.log(' girls grade :' +girlsGrade)

const totalGirlsGrade = girlsGrade.reduce((a,b) => (a + b)) 

console.log('total girls grade :' +totalGirlsGrade)

function number3() {
    count = 0
    for(number of girls) {
        count +=1
    }
    return count
}
console.log(number3())

console.log('average girls :' +avClGrade(totalGirlsGrade, number3()))

//The higher note among the boys

console.log(boysGrade)
console.log(typeof boysGrade)

const biggest = boysGrade.map(biggest =>  biggest)

console.log(Math.max(...boysGrade) + 'boys')

// console.log(typeof biggest)
// console.log(biggest + 'biggest')

const maxGGrade= girlsGrade.reduce((a,b) => Math.max(a,b));

console.log(maxGGrade + 'highest girl grade')

//page 97

//objects programming

let rabbit = {};
rabbit.speak = function(line) {
    console.log(`the rabbit says '${line}'`)
}

rabbit.speak('i am alive')

function speak(line) {
    console.log(`the ${this.type} rabbit says '${line}'`)
}

let whiteRabbit = {type: 'white', speak};
let hungryRabbit = {type: 'hungry', speak};

whiteRabbit.speak('oh my ears and whiskers ' +
 'how its getting late');

 hungryRabbit.speak('i am always hungry')

 let empty = {};
 console.log(empty.toString);

 console.log(empty.toString());

 console.log(Object.getPrototypeOf({}) == Object.prototype);

 console.log(Object.getPrototypeOf(Object.prototype));

 console.log(Object.getPrototypeOf(Math.max) == Function.prototype)

 console.log(Object.getPrototypeOf([]) == Array.prototype)


 // clases
 class Car {
     constructor(name, color, year) {
         this.name = name;
         this.color = color;
         this.year = year;
         this.number = 0;
     }
     login(){
         console.log(this.name, 'just logged in');
         return this;
     };
     logout(){
         console.log(this.name, 'just logged out');
         return this;
     };
     updateNumber() {
         console.log(this.name, 'quantity is now', this.number)
         this.number++
         return this
        
     }
 }

 var car1 = new Car('toyota', 'black', '2004')
 var car2 = new Car('toyota', 'red', '2006')
 var car3 = new Car('toyota', 'pink', '2010')

 console.log(car1)
 console.log(car2)
 console.log(car3)
 console.log(car1.login().updateNumber().logout().updateNumber())

 console.log()

//  page 104

let ages1 = {
    Boris: 39,
    Ling: 22,
    Julia: 62
};
console.log(`julia is ${ages1['Julia']}`);
console.log('is Boris age known?', "Boris" in ages1);
console.log('is toStrings age kniown', 'toString' in ages1)
console.log(ages1.hasOwnProperty('Boris'))
console.log(ages1.hasOwnProperty('toString'))

let ages =new Map();
ages.set("Borris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`julia is ${ages.get('Julia')}`)
console.log('is borris age known?', ages.has('Borris'))
console.log('is jack age known?', ages.has('Jack'))
console.log('is jack age known?', ages.has('Jack'))
console.log( ages.has('toString'))

let sym = Symbol('name');
console.log(sym == Symbol('name'));

let num = 5;
console.log(num == 5)

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of yarn`;
};

console.log([1,2].toString())
console.log([1,2][toStringSymbol]());

let okIterator = "OK"[Symbol.iterator]()
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())

//page 115 exercise
class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vec(this.x - other.x, this.y -other.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y*this.y)
    }
}

console.log(new Vec(1,2).plus(new Vec(2,3)))

console.log(new Vec(1,2).minus(new Vec(2,3)))

class Group {
    constructor (){
        this.members = [];
    }

    add(value) {
        if(!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
    this.members = this.members.filter(v => v !== value)
    }

    has(value) {
        return this.members.includes(value)
    }

}

function promptDirection(question) {
    let result = prompt(question);
    if(result.toLowerCase()=="left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw newError("invaid diresction:" + result)
}

function look(){
    if(promptDirection("which way?") == "L") {
        return 'a house';
    }else {
        return 'two angry bears';
    }
}

try {
    console.log("you see", look());
}catch (error) {
    console.log('something went wrong:' + error )
}

const accounts = {
    a:100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("enter an account name");
    if(!accounts.hasOwnProperty(accountName)) {
        throw new Error(`no such account: ${accountName}`)
    }
    return accountName
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}

setTimeout( ()=> console.log("Ticks"), 500)