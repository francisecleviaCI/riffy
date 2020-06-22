const newYork = require('./back-end.js')
const retirement = require('./retirement.js')
const moneyleft = require('./money-left.js')


let input1 = getInput(0)  //Monthly Income
console.log('Your monthly income is ' + input1)
let input2 = getInput(1)  //Monthly Spend
console.log('Your monthly spend is ' + input2)
let input3 = getInput(2)  //User Age
console.log('Your age is ' + input3)
let input4 = getInput(3)  //Current Savings
console.log('Your current savings amount is ' + input4)


// Our helper function here! Don't  touch!
function getInput(i) {
    return process.argv[i + 2];
  }
  

if (input1 === undefined || input2 === undefined || input3 === undefined || input4 === undefined){
  console.log("You need to input everything!");
}

let Calculation = newYork(input1, input2, input3, input4);
console.log(Calculation)
let Calculation2 = retirement(input1, input2, input3, input4);
console.log("Given the retirement age of 65, you are estimated to be worth " + "$" + String(Calculation2).substring(0,7) + "!")
let Calculation3 = moneyleft(input1, input2, input3, input4);
console.log(Calculation3)





