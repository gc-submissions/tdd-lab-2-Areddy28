// creating a class called product 
class Product {
    constructor(name, price, taxable) {
         this.name = name; // string
         this.price = price; // number 
         this.taxable = taxable; // boolean     
    }
    //any methods
    getPriceWithTax() {
        // return a number
        // if statement to create a boolean expression 
        if (this.taxable == true) {
            return this.price * 1.10; 
        } else {
            return this.price; 
        }
    }
}

module.exports = Product; 



//notes to do different if statements:

// getPriceWithTax () {
//     if (this.taxable) {
//         return this.price * 1.10; 
//     } else {
//         return this.price
//     }
// }

//tertiary property:

//return this.taxable ? this.price * 1.10 : this.price; 

