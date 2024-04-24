// Assignement #3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Azmir";

//Lower Case
personName = personName.toLowerCase();
console.log(personName);

//Upper Case
personName = personName.toUpperCase();
console.log(personName);

//Title Case
personName =  personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(personName);