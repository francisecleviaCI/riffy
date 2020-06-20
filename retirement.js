function retirement(input1, input2, input3, input4){
return (input4 + [input1 - input2]*12) * Math.pow(1.08, (65 - input3));
}
    let NetWorth = retirement()
    NetWorth;
 
    //(Current Savings + (Input1 - Input2) * (1.08 ^YearstoRetirement)
// ex. (500000 + [5000 - 2000] * (1.08^)

    // investment * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;

    // let input1 = getInput(0)  //Monthly Income
    // console.log(input1)
    // let input2 = getInput(1)  //Monthly Spend
    // console.log(input2)
    // let input3 = getInput(2)  //User Age
    // console.log(input3)
    // let input4 = getInput(3)  //Current Savings

module.exports = retirement;
