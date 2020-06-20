function retirement(input1, input2, input3, input4){

    
    function retirement(str){
    return (Input4 + [Input1 - Input2]) * Math.pow(1.08, (65 - Input3));
    
    }
    let NetWorth = retirement(str)
    console.log(NetWorth)
    
    //(Current Savings + (Input1 - Input2) * (1.08 ^YearstoRetirement)


const MoneyLeft = [Input1 - Input2]*12
 
 if (MoneyLeft >= 4427){
        console.log("You can retire in Manhattan!");
    
} else if (MoneyLeft > 3950 && MoneyLeft < 4427){
    console.log("You can retire in Brooklyn!");
    
} else if (MoneyLeft > 3367 && MoneyLeft < 3950){
    console.log("You can retire in Queens!");

} else if (MoneyLeft > 3027 && MoneyLeft < 3367){
    console.log("You can retire in Long Island!");

} else if (MoneyLeft > 2907 && MoneyLeft < 3027){
    console.log("You can retire in Staten Island!");

} else if (MoneyLeft > 2366 && MoneyLeft < 2907){
    console.log("You can retire in Bronx!");

} else {
    console.log("Sorry, you'll have to move to Arizona! :(");
}

}




module.exports = retirement;