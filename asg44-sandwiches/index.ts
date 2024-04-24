// Assignment #44 : Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwichItems(...items : string[]){
    console.log("\nItems in sandwich that should be used: ");
    items.forEach(singleitem => console.log(singleitem));
}

sandwichItems("Cheese", "Beans", "Lettuce");
sandwichItems("Cheese", "Tuna", "Cucumber", "Butter", "Mince");
sandwichItems("Cheese", "Tuna", "Cucumber", "Butter", "Mince", "Chicken", "Sauce", "Ketchup");