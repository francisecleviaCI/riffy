function moneyleft(input1, input2){    
    
const MoneyLeft = [input1 - input2]
     
     if (MoneyLeft >= 4427){
            return "You can retire in Manhattan!";
        
    } else if (MoneyLeft > 3950 && MoneyLeft < 4427){
        return "You can retire in Brooklyn!";
        
    } else if (MoneyLeft > 3367 && MoneyLeft < 3950){
        return "You can retire in Queens!";
    
    } else if (MoneyLeft > 3027 && MoneyLeft < 3367){
        return "You can retire in Long Island!";
    
    } else if (MoneyLeft > 2907 && MoneyLeft < 3027){
        return "You can retire in Staten Island!";
    
    } else if (MoneyLeft > 2366 && MoneyLeft < 2907){
        return "You can retire in Bronx!";
    
    } else {
        return "Sorry, you'll have to move to Arizona! :(";
    }
    
    
    
    
}
    
    module.exports = moneyleft;