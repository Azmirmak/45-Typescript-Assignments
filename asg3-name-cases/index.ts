// Assignement #3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "azmir inam";

//Lower Case
personName = personName.toLowerCase();
console.log(personName);

//Upper Case
personName = personName.toUpperCase();
console.log(personName);

//Title Case
function titleCase(personName : string) : string {
    return personName.split(` `).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(` `);
}
console.log(titleCase(personName));