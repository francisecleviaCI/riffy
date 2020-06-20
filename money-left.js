function moneyleft(input1, input2){    
    
const MoneyLeft = [input1 - input2]
     
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
    
    module.exports = moneyleft;