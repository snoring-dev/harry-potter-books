# Harry Potter Book Shopping Cart

This project implements a shopping cart for Harry Potter books. It allows you to add books to the cart, calculate the total price with applicable discounts, and generate combinations of books for different purchase options.

## Usage

1. Create an instance of the `ShoppingCart` class:
   > const cart = new ShoppingCart();

2. Add items to the cart using the `addItem` method. Provide the book number and quantity as arguments:
	> cart.addItem(bookNumber, quantity);
	
3. Calculate the total price with discounts using the `checkout` method:
	> const totalPrice = cart.checkout();
	
4. Additional methods:
-   `getDiscounts()`: Returns an array of discounts based on the number of different books purchased.
-   `getEmptyArray()`: Returns an array filled with zeroes, with a length of 5 (representing book quantities).
-  `getSortedCart()`: Generates a new Map with items sorted by quantity in a descending way.
-   `createCombinations()`: Generates combinations of books based on the items in the cart.


## Code Explanation

The code consists of a `ShoppingCart` class that handles the cart functionality. Here's a brief explanation of each method:

-   `addItem`: Adds a new item to the cart or increases the quantity of an existing item.
-   `getDiscounts`: Returns an array of discounts based on the number of different books purchased.
-   `getEmptyArray`: Returns an array filled with zeroes, with a length of 5 (representing book quantities).
-   `createCombinations`: Generates combinations of books based on the items in the cart.
-   `checkout`: Calculates the total price of the cart with applicable discounts.

## Code Explanation

-   The `ShoppingCart` class is exported as the default export. It represents a shopping cart for Harry Potter books.
-   The `constructor` method initializes the `items` property as a new `Map`. This map will store the book numbers as keys and their corresponding quantities as values.
-   The `addItem` method allows adding items to the shopping cart. It takes `bookNumber` and `quantity` as arguments.
-   If the `items` map already contains the `bookNumber`, it retrieves the existing quantity using `this.items.get(bookNumber)`, then calculates the new quantity by adding the existing quantity (`purchasedBooks`) with the provided `quantity`.
-   The existing entry is deleted from the map using `this.items.delete(bookNumber)` and a new entry is set with the updated quantity using `this.items.set(bookNumber, newQte)`.
-   If the `bookNumber` does not exist in the map, a new entry is added using `this.items.set(bookNumber, quantity)`.
- The `getDiscounts` method returns an array of discounts. The discounts are represented as decimal values corresponding to the number of different books purchased. For example, the discount for purchasing 2 different books is 5% (0.05).
- The `getEmptyArray` method returns an array filled with zeroes. The length of the array is 5, representing the quantity of each book.
-  The `getSortedCart` method returns a sorted version of the `items` map. The entries are sorted based on the quantity of books in descending order using the `sort` method with a custom comparison function `(a, b) => b[1] - a[1]`.
-   The `createCombinations` method generates combinations of books based on the items in the cart. It starts by initializing an empty array `baskets`, which will store the combinations.
-   The sorted cart is obtained by calling the `getSortedCart` method, ensuring the combinations are created based on the books with the highest quantities first.
-   The method then iterates over each entry in the sorted cart using a `for...of` loop.
-   For each book number and quantity pair, it further loops `qte` times to generate combinations.
-   It checks if `baskets[i]` exists. If it does, it retrieves the existing combination array. Otherwise, it creates a new array by calling the `getEmptyArray` method.
-   The combination array is updated by setting the index corresponding to the book number minus one to 1. This represents the inclusion of that book in the combination.
-   If `baskets[i]` doesn't exist, indicating a new combination, it is added to the `all` array using `baskets.push(entry)`.
-   Finally, the `baskets` array containing all the combinations is returned.
-   The `checkout` method calculates the total price for the items in the shopping cart, taking into account the applicable discounts.

### Price calculation

1.  The checkout process starts by calling the `createCombinations` method to generate the baskets (combinations of books) based on the items in the shopping cart. The baskets are stored in the `baskets` variable.
    
2.  It initializes the `total` variable to 0, which will store the accumulated total price.
    
3.  For each basket, it calculates the total number of books (`sum`) by reducing the values in the basket array (0s and 1s) using the `reduce` method.
    
4.  It retrieves the discount applicable to the number of different books in the basket by indexing into the `getDiscounts` array using the `sum` as the index.
    
5.  The regular price is calculated by multiplying the `sum` by the individual book price, which is assumed to be 8 euros.
    
6.  The `finalPrice` is calculated by subtracting the discount amount from the regular price. This represents the final price after applying the discount.
    
7.  The `finalPrice` is added to the `total` variable to accumulate the total price.
    
8.  Finally, the `total` is returned as a string representation with 2 decimal places using the `toFixed` method.

## Limitations

#### Inefficient Array Manipulation: 
In the `createCombinations` method, the code repeatedly creates and updates arrays for each book quantity. This can be inefficient, especially for large quantities. Consider using a more efficient data structure or approach for generating the combinations. 

#### Limited Test Coverage: 
The provided tests cover only a few scenarios. It would be beneficial to have a more comprehensive set of tests to ensure that the code handles various edge cases and scenarios correctly.