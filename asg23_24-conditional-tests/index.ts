// Assignment # 23 : Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.

//Assignment #24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let game = "CSGO"
console.log(game === 'CSGO' ? true : false);
console.log( game === 'csgo' ? true : false);

let val = 10;
console.log( val === 10 ? true : false);
console.log(val > 10 ? true  : false);
console.log(val < 15 ? true : false);
console.log(val != 10 ? true : false);

let id = 43320;
console.log(id === 43320 ? true : false);
console.log(id === 43220 ? true : false);

let Name = "Saim";
console.log("It is", Name === "Saim" ? true : false);
console.log("It is", Name === "Saad" ? true : false);

let num1 = 5;
let num2 = 9;
let cond1 = num1 < num2;
let cond2 = num1 === num2;

console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!cond1);
console.log(num1 >= num2);

let day1 = "sunday";
let day2 = "monday";
console.log(day1 === day2);
console.log(day1 != day2);  

let array = [1, 2, 3, 4, 5, 6];
console.log(array.includes(3) ? true : false);
console.log(!array.includes(5)? true : false);
