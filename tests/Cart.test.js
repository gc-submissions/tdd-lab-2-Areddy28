const Cart = require("../src/js/Cart"); 
const Product = require("../src/js/Product"); 

describe("Cart", () => {
  // #1

  test("Confirm that the constructor correctly sets the items property to an empty array. ", () => {
    //Arrange
    let cart = new Cart(); 

    //Act
    
    //Assert
    expect(cart.items).toEqual([]); 
  });
  // #2

  test("Calling add once adds one product to the items array. Make sure the correct product object was added.", () => {
  // Arrange 
  let cart = new Cart(); 
  let tv = new Product("samsung", 300, true); 
  // Act
  cart.add(tv); 

  // Assert
  expect(cart.items.length).toBe(1);
  expect(cart.items[0].name).toBe("samsung"); 
  })

  // #3

  {

    // Arrange 

    let cart = new Cart(); 
    let tv = new Product("tv", 300, true); 
    let iphone = new Product("iphone", 400, true); 

    // Act 
    cart.add(tv); 
    cart.add(iphone); 
    // Assert 
    
    test("Calling add twice leaves a total of two Products in the item array", () =>{
        expect(cart.items.length).toBe(2); 
  
    })
    test("Calling add twice leaves a total of two Products in the item array", () =>{
        expect(cart.items[0]).toEqual({name: "tv", price: 300, taxable: true}); 
  
    })
    test("Calling add twice leaves a total of two Products in the item array", () =>{
        expect(cart.items[1]).toEqual({name: "iphone", price: 400, taxable: true}); 
  
    })

    // #4

    test("getItemCount returns the length of the item array", () => {
      expect(cart.getItemCount()).toBe(2);
  })
    test("getItemCount returns the length of the items array", () => {
      // Act

      cart.add(iphone); 

      // Assert 

      expect(cart.getItemCount()).toBe(3); 
    })

    // #5 

    test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () => {
        expect(cart.getTotalBeforeTax()).toBeCloseTo(1100)
    })

    test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () => {
      
      // Arrange
  
      let advice = new Product("advice", 0, false); 
  
      // Assert 
  
      expect(cart.getTotalBeforeTax()).toBeCloseTo(1100)

    })


    // #6

    test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array.", () => {
      expect(cart.getTotalWithTax()).toBeCloseTo(1500)
    })

    test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array.", () => {
      // Act 
      cart.add(tv); 
      
      // Assert
      expect(cart.getTotalWithTax()).toBeCloseTo(1400); 

    })

    // #7 

    test("getTax returns the difference between getTotalWithTax and getTotalBeforeTax", () => {
      expect(cart.getTax()).toBeCloseTo(186); 
    })


}




});


// Destructuring Notes:







// test("Calling add twice leaves a total of two Products in the items array.", () => {
//   // Arrange 
//   let cart = new Cart(); 
//   let tv = new Product(); 
//   let iphone = new Product(); 

//   // Act 
//   cart.add(tv); 
//   cart.add(iphone); 

//   // Assert 
//   expect(cart.items.length).toBe(2); 
//   expect(tv).toEqual({name: "tv", price: 45, taxable: true}); 
//   expect(iphone).toEqual({name: "iphone", price: 55, taxable: true});
  
// })

// #4

// test("getItemCount returns the length of the item array", () => {
//       expect.cart.getItemCount().toBe(2); 
// })