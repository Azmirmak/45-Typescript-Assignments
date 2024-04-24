"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let player = [
    { name: "Babar", domain: "Batsman", order: "Top", average: 56.72 },
    { name: "Virat", domain: "Batsman", order: "Top", average: 54.38 },
    { name: "Starc", domain: "Bowler", order: "Low", average: 6.24 },
];
player.forEach((info) => {
    console.log(`Player Name = ${info.name}, Player domain = ${info.domain}, Batting order = ${info.order}, Average = ${info.average}`);
});
