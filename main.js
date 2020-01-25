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
*/

for(let number = 0; number <= 8; number++){
    let output = '';
    if( number % 2 == 0){
        output = '# # # # '
    }
    else
    output = ' # # # #'
    console.log(output)
}
