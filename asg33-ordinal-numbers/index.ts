//Assignment #33 : Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

let numbers = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9];

for(let number of numbers){
    let ordinalEnd = "";

    if(number === 1){
        ordinalEnd = "st";
    }else if(number === 2){
        ordinalEnd = "nd";
    }else if (number === 3){
        ordinalEnd = "rd";
    }else{
        ordinalEnd = "th";
    }
    console.log(`${number}${ordinalEnd}`);
};
