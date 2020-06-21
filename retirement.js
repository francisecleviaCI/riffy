function retirement(input1, input2, input3, input4){
return (input4 + ([input1 - input2]*12)) * Math.pow(1.08, (65 - input3));
}
    let NetWorth = retirement();
    NetWorth;
 
    //(Current Savings + (Input1 - Input2) * (1.08 ^YearstoRetirement)
// ex. (500000 + [5000 - 2000] * (1.08^)

    

module.exports = retirement;

