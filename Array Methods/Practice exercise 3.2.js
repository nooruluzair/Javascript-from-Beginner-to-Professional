//Create an empty array to use as a shopping list.
let ShoppingList = [];
console.log(ShoppingList);

//Add Milk, Bread, and Apples to your list.
ShoppingList.push("Milk","Bread","Apple");
console.log(ShoppingList);

//Update "Bread" with Bananas and Eggs.
ShoppingList.splice(1,1,"Bananas","Eggs");
console.log(ShoppingList);

//Remove the last item from the array and output it into the console.
ShoppingList.pop();
console.log(ShoppingList);

//Sort the list alphabetically.
ShoppingList.sort();
console.log(ShoppingList);

//Find and output the index value of Milk.
let indexofmilk = ShoppingList.indexOf("Milk");
console.log(indexofmilk);
/*After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.*/

