//Assignment #21 : Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



type info = {
    name : string;
    domain : string;
    order : string;
    average : number;
}

let player : info[] = [
    { name : "Babar", domain: "Batsman", order: "Top", average: 56.72},
    { name : "Virat", domain: "Batsman", order: "Top", average: 54.38},
    { name : "Starc", domain: "Bowler", order: "Low", average: 6.24},
]

player.forEach((info)=>{
    console.log(`Player Name = ${info.name}, Player domain = ${info.domain}, Batting order = ${info.order}, Average = ${info.average}`);
});