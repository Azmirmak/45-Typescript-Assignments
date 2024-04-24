//Assignment #17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guestList = ["Hamza", "Inam", "Noman", "Ali", "Zia"];
let i = 0;
while (i < guestList.length) {
    console.log(`Hello ${guestList[i]}! You are invited for dinner this Sunday.`);
    i++;
}
;
console.log(`${guestList[2]} won't be able to attend the dinner.`);
guestList[2] = "Dany";
let j = 0;
while (j < guestList.length) {
    console.log(` Hello ${guestList[j]}! You are invited for dinner this Sunday.`);
    j++;
}
;
console.log("Hey guys I found a bigger table for dinner, so we have more friends to joim.");
guestList.push("Suhaib");
guestList.splice(2, 0, "Babar");
guestList.unshift("Wasif");
let k = 0;
while (k < guestList.length) {
    console.log(` Hello ${guestList[k]}! You are invited for dinner this Sunday.`);
    k++;
}
;
console.log("Sorry I can only invite two guests for dinner.");
while (guestList.length > 2) {
    let removedGuests = guestList.pop();
    console.log(`Sorry ${removedGuests} I cant invite you for dinner.`);
}
// remaining two invitation:
console.log(`Don't worry ${guestList[0]}! You are still invited for dinner this Sunday.`);
console.log(`Don't worry ${guestList[1]}! You are invited for dinner this Sunday.`);
guestList.pop();
guestList.pop();
console.log(guestList);
export {};
