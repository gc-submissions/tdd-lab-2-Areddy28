const Product = require("../src/js/Product"); 

describe("Product", () => {
       // #1
  test("Confirm that the constructor parameters correctly set three properties on the class for apples", () => {
          // Arrange
          let oranges = new Product ("oranges", 1, true);

          //Assert
          expect(oranges).toEqual({name: "oranges", price: 1, taxable: true }); 

        });
        test("Confirm that the constructor parameters correctly set three properties on the class for oranges", 
        () => {
            // Arrange
            let apples = new Product("apples", 2, true); 

            // Assert
            expect(apples).toEqual({name: "apples", price: 2, taxable: true }); 
        
     });

     // #2
       test("Given a Product with taxable true, getPriceWithTax returns the price + 10%.", () =>{
              // Arrange
            let toys = new Product ("toys", 15, true);
              
              // Act


              // Assert 
            expect(toys.getPriceWithTax()).toBeCloseTo(16.5);
    
     })

     test("Given a Product with taxable true, getPriceWithTax returns the price + 10%....tv", () => {
            // Arrange 
            let tv = new Product("tv", 300, true);

            // Act

            // Assert 
            expect(tv.getPriceWithTax()).toBeCloseTo(330);
            
     })

       // #3

     test("Given a Product with taxable false, getPriceWithTax returns just the price....table", () => {
            // Arrange
            let table = new Product("table", 25, false);

            // Act

            // Assert 
            expect(table.getPriceWithTax()).toBeCloseTo(25);
     })
     test("Given a Product with taxable false, getPriceWithTax returns just the price....hotdog", () => {
            // Arrange
            let hotdog = new Product("hotdog", 5, false);

            // Act

            // Assert 
            expect(hotdog.getPriceWithTax()).toBeCloseTo(5);
     })

});


