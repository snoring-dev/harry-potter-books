# Harry Potter Book Shopping Cart

This project implements a shopping cart for Harry Potter books. It allows you to add books to the cart, calculate the total price with applicable discounts, and generate combinations of books for different purchase options.

## Usage

1. Create an instance of the `BookStore` class:
   > const cart = new BookStore();

2. Add items to the cart using the `addBook` method:
	> cart.addBook(bookNumber);
	
3. Calculate the total price with discounts using the `getTotalPrice` method:
	> const totalPrice = cart.getTotalPrice();
	

## Code Explanation

The provided code represents a BookStore class that manages a shopping cart for Harry Potter books. It includes methods to add books to the cart, calculate the total price, and perform book-related operations.

#### Key Features:

The `BookStore` class keeps track of books and their quantities using a Map data structure.
The `getTotalPrice()` method calculates the total price for the books in the cart, considering discounts based on the number of distinct books.

The code includes additional methods for book operations, such as adding books, removing one book from each volume, and retrieving the number of distinct and total books.

#### Benefits:

-	The code organizes the book-related logic into a separate class, promoting modularity and maintainability.
-	It includes constants for book volumes, discounts, and single book price, allowing easy modification if needed.
-	The implementation handles discounts for different numbers of distinct books, providing flexibility.
-	The code follows naming conventions and uses appropriate data structures for efficient book management.
