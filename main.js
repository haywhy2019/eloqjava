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