class Cart {
    constructor(){
        this.items = []; 
    }

    add(product) {
        // When adding items use the push method
        this.items.push(product); 
    }

    getItemCount() {
        return this.items.length; 
    }

    getTotalBeforeTax() {
        // variable to hold the total 
        let total = 0; 
        // loop
        this.items.forEach((item) => {
            total += item.price; 
        }) 
        // return total
        return total; 
    }

    getTotalWithTax() {
        // variable to hold the total 
        let total = 0; 
        // loop
        this.items.forEach((item) => {
            total += item.getTotalWithTax()
        })
        // return the total
        return total; 
    }

    getTax() {
        // subtracts the results of getTotalWithTax and getTotalBeforeTax
        return this.getTotalWithTax() - this.getTotalBeforeTax();
        
    }
}

module.exports = Cart;


//let cart = [
//     {name: "guitar", price: 1500, taxable: true}, 
//     {name: "book", price: 1500, taxable: true}, 
//     {name: "gum", price: 1500, taxable: true}  
// ]

// Cart.forEach(function(item){
//     console.log(item.name)
// })

// for (let i = 0; i < Cart.length; i++) {
//     console.log(cart[i].name)
// }


// for (let item of cart) {
//     console.log(item)
// }