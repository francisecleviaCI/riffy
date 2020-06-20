const newYork = require('./back-end.js')
const retirement = require('./retirement.js')
const moneyleft = require('./money-left.js')


let input1 = getInput(0)  //Monthly Income
console.log(input1)
let input2 = getInput(1)  //Monthly Spend
console.log(input2)
let input3 = getInput(2)  //User Age
console.log(input3)
let input4 = getInput(3)  //Current Savings
console.log(input4)


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
console.log("Given the retirement age of 65, you are estimated to be worth " + Math.trunc(Calculation2))
let Calculation3 = moneyleft(input1, input2, input3, input4);
console.log(Calculation3)


//Final statement: 

// console.log("Given the retirement age of 65, you are estimated to be worth" + NetWorth);
// console.log(MoneyLeft);







