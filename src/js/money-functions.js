let formatCurrency = (amount) => {
    let abs = Math.abs(amount); 
    return amount >= 0 ? "$" + abs.toFixed(2): "-$" + abs.toFixed(2);  
}


let getCoins = (cents) => {
    let change = cents; 

    let quarters = Math.floor(change/25); 
    change -= quarters * 25

    let dimes = Math.floor(change/10); 
    change -= dimes * 10

    let nickels = Math.floor(change/5)
    change -= nickels * 5

    let pennies = change; 

    return {
        quarters: quarters, 
        dimes: dimes, 
        nickels: nickels, 
        pennies: pennies 
    }



}




// function formatCurrency (amount) {
//         return "$" + amount.toFixed(2);
        
        
// }

// function getCoins () {

// }

//module.exports = {formatCurrency, getCoins}

module.exports = {formatCurrency, getCoins}

