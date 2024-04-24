//Assignment #15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

import { gunzipSync } from "zlib";

let guestList = ["Hamza", "Inam", "Noman", "Ali", "Zia"];
let i = 0;
while(i < guestList.length){
    console.log(`Hello ${guestList[i]}! You are invited for dinner this Sunday.`);
    i++;
};

console.log(`${guestList[2]} won't be able to attend the dinner.`);

guestList[2] = "Dany";

let j = 0;
while(j < guestList.length){
    console.log(` Hello ${guestList[j]}! You are invited for dinner this Sunday.`);
    j++;
};