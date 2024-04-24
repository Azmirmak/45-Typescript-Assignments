"use strict";
let errorArr = ["Apple", "Mango", "Banana", "Avocado"];
//Producing error
/*errorArr.splice(2,"Grapes");
console.log(errorArr);*/
//Error rectification
console.log(errorArr.length);
errorArr.splice(1, 2, "Grapes");
console.log(errorArr);
