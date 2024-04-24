//Assignment #22 : Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let errorArr = ["Apple", "Mango", "Banana", "Avocado"];

//Producing error
/*errorArr.splice(2,"Grapes");
console.log(errorArr);*/

//Error rectification
errorArr.splice(2,1,"Grapes");
console.log(errorArr);