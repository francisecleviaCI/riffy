const newYork = require('./back-end.js')
const retirement = require('./retirement.js')


let input1 = getInput(0)  //Monthly Income
console.log(input1)
let input2 = getInput(1)  //Monthly Spend
console.log(input2)
let input3 = getInput(2)  //User Age
console.log(input3)
let input4 = getInput(3)  //Current Savings
console.log(input4)

if (input1 === undefined || input2 === undefined || input3 === undefined || input4 === undefined){
  console.log("You need to input everything!");


let Calculation = newYork(input1, input2, input3, input4);
console.log(Calculation)





// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}